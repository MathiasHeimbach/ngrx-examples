import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function appenderReducer(state: string = '', action: Action) {
	switch (action.type) {
		case INCREMENT:
			return state + 'ssss';

		case DECREMENT:
			return state + 'tttt';

		case RESET:
			return '';

		default:
			return state;
	}
}