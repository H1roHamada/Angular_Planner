import { inject } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

export const authEffect = createEffect(
	() => {
		const actions$ = inject(Actions);
		// const apiService = inject(ApiService)

		return actions$.pipe();
		// ofType(AuthActions.auth),
		// switchMap(() => of())
	},
	{
		functional: true
	}
);
