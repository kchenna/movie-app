import { types } from './VideoActionType';

export const initialState = () => {
    return {
        selectedTrack:{}
    };
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case types.SELECTED_TRACK :
            return {
                    ...state,
                    selectedTrack: action.track
                };
        default:
            return state;    
    }
};