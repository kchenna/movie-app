import { types } from './VideoActionType';

export function setSelectedTrack(track){
    return (dispatch) => {
        dispatch({ type: types.SELECTED_TRACK , track });
    };
}