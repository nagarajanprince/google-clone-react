export const initialState = {
    term: ''
}

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term
            };

        default:
            return state;
    }
}

export default reducer;