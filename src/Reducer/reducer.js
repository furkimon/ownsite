export const initialState = {
    isSideBar: false
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return {
                ...state, isSideBar: !action.payload
            }
        default:
            return { state };
    }
}

export default reducer;