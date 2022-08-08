const initialState = {
    seatList: [],
};

const reducer = (currentState = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SEAT_LIST":
            currentState.seatList = action.payload;
            return { ...currentState };

        default:
            return currentState;
    }
};

export default reducer;
