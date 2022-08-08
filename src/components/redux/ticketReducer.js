const initialState = {
    ticketList: [],
};

const reducer = (currentState = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TICKET": {
            const cloneTicketList = [...currentState.ticketList];

            const foundTicket = cloneTicketList.findIndex(
                (item) => item.seatNumber === action.payload.seatNumber
            );

            if (foundTicket !== -1) {
                cloneTicketList.splice(foundTicket, 1);
            } else {
                cloneTicketList.push(action.payload);
            }

            return { ...currentState, ticketList: cloneTicketList };
        }
        case "DELETE_TICKET": {
            const cloneTicketList = [...currentState.ticketList];

            const foundTicket = cloneTicketList.findIndex(
                (item) => item.seatNumber === action.seatNumber
            );

            if (foundTicket !== -1) {
                cloneTicketList.splice(foundTicket, 1);
            }

            return { ...currentState, ticketList: cloneTicketList };
        }

        case "PURCHASE_TICKET": {
            let cloneTicketList = [...currentState.ticketList];
            console.log(cloneTicketList);

            if (cloneTicketList.length) {
                cloneTicketList = [];

                alert("Your seat has been selected !!");
            } else {
                alert("Please select a seat !!");
            }

            return { ...currentState, ticketList: cloneTicketList };
        }

        default:
            return currentState;
    }
};

export default reducer;
