import { InjectionToken } from "@angular/core";
import { IAppSettings, AppProvidersArray, IAuthSettings } from "./types";

export const APP_SETTINGS = new InjectionToken<IAppSettings>('APP_SETTINGS');
export const IAUTH_SETTINGS = new InjectionToken<IAuthSettings>('IAUTH_SETTINGS');
export const APP_ENVIRONMENT = new InjectionToken<any>('APP_ENVIRONMENT');
export const APP_PROVIDERS_ARRAY = new InjectionToken<AppProvidersArray>('APP_PROVIDERS_ARRAY');
export const APP_SETTINGS_MANIFEST_URL = new InjectionToken<string>('APP_SETTINGS_MANIFEST_URL');