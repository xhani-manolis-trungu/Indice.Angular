import { InjectionToken } from "@angular/core";
import { IAppSettings, SettingsLibraryConfig } from "./types";

export const APP_SETTINGS = new InjectionToken<IAppSettings>('APP_SETTINGS');
export const APP_SETTINGS_MANIFEST_URL = new InjectionToken<string>('APP_SETTINGS_MANIFEST_URL');
export const APP_ENVIRONMENT = new InjectionToken<any>('APP_ENVIRONMENT');
export const APP_SETTINGS_LIBRARY_CONFIG = new InjectionToken<SettingsLibraryConfig>('APP_SETTINGS_LIBRARY_CONFIG');