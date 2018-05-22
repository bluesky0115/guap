import {ACTIVE_USER} from './types';

export const activeUser = (result) => {
	return {
		type: ACTIVE_USER,
		payload: result,
		isActive: true
	}
}