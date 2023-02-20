import { ActionReducer, Action } from '@ngrx/store';

export const APPENDS = 'APPENDS';
export const APPENDT = 'APPENDT';
export const RESETAPPEND = 'RESETAPPEND';

export function appenderReducer(state: string = '', action: Action) {
	switch (action.type) {
		case APPENDS:
			return state + 'ssss';

		case APPENDT:
			return state + 'tttt';

		case RESETAPPEND:
			return '';

		default:
			return state;
	}
}