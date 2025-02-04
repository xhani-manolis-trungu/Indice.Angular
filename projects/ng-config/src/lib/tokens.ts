import { InjectionToken } from "@angular/core";
import { IAppSettings, AppProvidersArray, IAuthSettings } from "./types";

export const APP_SETTINGS = new InjectionToken<IAppSettings>('APP_SETTINGS');
export const IAUTH_SETTINGS = new InjectionToken<IAuthSettings>('IAUTH_SETTINGS');
/**
 * Utilize this token to provide the initial structure of your environment in the consuming application
 * 
 * Usage: { provide: APP_ENVIRONMENT, useValue: environment },
 */
export const APP_ENVIRONMENT = new InjectionToken<any>('APP_ENVIRONMENT');
/**
 * Utilize this to provide the array of providers
 * by calculating on runtime the value of the token key from APP_SETTINGS after they are set by the Initializer
 */
export const APP_PROVIDERS_ARRAY = new InjectionToken<AppProvidersArray>('APP_PROVIDERS_ARRAY');
/**
 * Override settings URL on the consuming application
 */
export const APP_SETTINGS_MANIFEST_URL = new InjectionToken<string>('APP_SETTINGS_MANIFEST_URL');