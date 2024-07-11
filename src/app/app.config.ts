import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import {
	ApplicationConfig,
	importProvidersFrom,
	isDevMode,
	provideZoneChangeDetection
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideNzI18n, ru_RU } from 'ng-zorro-antd/i18n';

import { routes } from './app-routing.module';
import { authEffect, authFeatures } from './features/auth/data-access/src';

registerLocaleData(ru);

export const appConfig: ApplicationConfig = {
	providers: [
		// Store
		provideStore({
			[authFeatures.name]: authFeatures.reducer
		}),

		provideEffects(authEffect),

		provideStoreDevtools({
			maxAge: 25,
			logOnly: !isDevMode(),
			autoPause: true,
			trace: false,
			traceLimit: 75
		}),
		//
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideNzI18n(ru_RU),
		importProvidersFrom(FormsModule),
		provideAnimationsAsync(),
		provideHttpClient()
	]
};
