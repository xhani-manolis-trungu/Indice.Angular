import {
  APP_INITIALIZER,
  EnvironmentProviders,
  InjectionToken,
  Injector,
  makeEnvironmentProviders,
  StaticProvider
} from '@angular/core';
import { IAppSettings, AppProvidersArray } from './types';
import { SettingsFacadeService } from './settings-facade.service';
import { lastValueFrom } from 'rxjs';
import { APP_ENVIRONMENT, APP_SETTINGS, APP_PROVIDERS_ARRAY, APP_SETTINGS_MANIFEST_URL } from './tokens';
import { AUTH_SETTINGS } from '@indice/ng-auth';

export function initializeAppSettings(
  appSettingsFacade: SettingsFacadeService,
  config: AppProvidersArray,
  injector: Injector
) {
  return async () => {
    // Wait for settings to load
    const success = await lastValueFrom(appSettingsFacade.loadSettings());

    if (success) {
      const dependencies = appSettingsFacade.getAppDependencies() as any[];
      // Create a child injector with the dependencies
      Injector.create({ providers: dependencies });
    } else {
      console.error('Failed to initialize app settings.');
      throw new Error('App settings could not be loaded.');
    }
  };
}

export function provideAppSettings(config: AppProvidersArray = {}): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_SETTINGS_MANIFEST_URL,
      useValue: config?.manifestUrl || '/assets/app-settings.manifest.json'
    },
    {
      provide: APP_PROVIDERS_ARRAY,
      useValue: config?.dependencies || []
    },
    {
      provide: APP_SETTINGS, 
      useValue: {} // Provide an empty object initially
    },
    {
      provide: APP_ENVIRONMENT,
      useValue: {}
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppSettings,
      deps: [SettingsFacadeService, APP_SETTINGS, Injector], // Add Injector to deps
      multi: true,
    },
    {
      provide: AUTH_SETTINGS,
      useFactory: (runtimeSettings: IAppSettings) => runtimeSettings.auth_settings,
      deps: [APP_SETTINGS],
    }
  ]);
}