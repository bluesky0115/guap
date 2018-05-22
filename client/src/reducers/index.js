import {ACTIVE_USER} from '../actions/types';

// DRY up later with if
const initialState = {
	isActive: localStorage.activeUser ? JSON.parse(localStorage.getItem('activeUser')).isActive : false,
	activeUser: localStorage.activeUser ? JSON.parse(localStorage.getItem('activeUser')).activeUser : ''
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIVE_USER:
			return {...state, activeUser: action.payload, isActive: true};
		default:
			return state;
	}
}

export default rootReducer;