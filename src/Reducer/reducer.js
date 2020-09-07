export const initialState = {
    isSideBar: false,
    close : true
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return {
                ...state, isSideBar: !action.payload
            }
        case 'CLOSE_SIDEBAR' :
            return {
                ...state, close: !action.payload
            }
        default:
            return { state };
    }
}

export default reducer;