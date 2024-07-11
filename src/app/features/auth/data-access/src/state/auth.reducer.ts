import { createFeature, createReducer } from '@ngrx/store';

export const AUTH_FEATURES_KEY = 'auth';

export const authInitialState = {
	isAuth: false
};

export const authFeatures = createFeature({
	name: AUTH_FEATURES_KEY,
	reducer: createReducer(
		authInitialState
		// // Login
		// on(authActions.login, state => ({
		// 	...state,
		// 	authStatus: 'loading' as const
		// })),

		// //  Login success
		// on(authActions.loginSuccess, (state, { res }) => ({
		// 	...state,
		// 	authStatus: 'loaded' as const,
		// 	authToken: res.authToken,
		// 	loggedUser: res.user
		// }))
	)
});
