import {
  APP_INITIALIZER,
  EnvironmentProviders,
  InjectionToken,
  Injector,
  makeEnvironmentProviders,
  StaticProvider
} from '@angular/core';
import { IAppSettings, SettingsLibraryConfig } from './types';
import { SettingsFacadeService } from './settings-facade.service';
import { lastValueFrom } from 'rxjs';
import { APP_SETTINGS, APP_SETTINGS_LIBRARY_CONFIG, APP_SETTINGS_MANIFEST_URL } from './tokens';
import { AUTH_SETTINGS } from '@indice/ng-auth';

export function initializeAppSettings(
  appSettingsFacade: SettingsFacadeService,
  appSettings: IAppSettings,
  config: SettingsLibraryConfig,
  injector: Injector
) {
  return async () => {
    // Wait for settings to load
    const success = await lastValueFrom(appSettingsFacade.loadSettings());

    if (success) {
      const providers = config.dependencies as StaticProvider[];
      // Create a child injector with the dependencies
      Injector.create({ providers: providers, parent: injector });
    } else {
      console.error('Failed to initialize app settings.');
      throw new Error('App settings could not be loaded.');
    }
  };
}

export function provideAppSettings(config: SettingsLibraryConfig = {}): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_SETTINGS_MANIFEST_URL,
      useValue: config.manifestUrl || '/assets/app-settings.manifest.json'
    },
    {
      provide: APP_SETTINGS, 
      useValue: {} // Provide an empty object initially
    },
    {
      provide: APP_SETTINGS_LIBRARY_CONFIG,
      useValue: config,
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