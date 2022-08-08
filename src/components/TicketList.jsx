import React, { Component } from "react";
import { connect } from "react-redux";

export class TicketList extends Component {
  getTicketInfo = () => {
    const seatList = this.props.seatList;
    const ticketList = this.props.ticketList;

    let ticketInfo = [];

    for (const ticket of ticketList) {
      for (const seat of seatList) {
        if (ticket.seatRow === seat.row) {
          const foundAnswer = seat.seatRowList.find(
            (item) => item.seatNumber === ticket.seatNumber
          );

          if (foundAnswer) {
            ticketInfo.push(foundAnswer);
          }
        }
      }
    }
    return ticketInfo;
  };

  calcTotal = () => {
    let total = 0;
    this.getTicketInfo().map((item) => (total += item.price));

    return total;
  };

  renderTicket = () => {
    return this.getTicketInfo().map((item, index) => {
      const { seatNumber } = item;
      return (
        <div className="ticket" key={index}>
          <div className="ticket-info">
            <div className="w-100 d-flex gap-5 justify-content-between">
              <span>
                Seat: <span>{seatNumber}</span>
              </span>
              <span className="m-0 p-0 lh-0 d-block">
                Price: <span>{item.price}</span>
              </span>
            </div>
          </div>
          <div className="ticket-action">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.dispatch({
                  type: "DELETE_TICKET",
                  seatNumber,
                });
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div className="h-100 d-flex justify-content-between flex-column flex-nowrap">
          <div className="ticket-area row pt-2 px-4 m-0">
            {this.renderTicket()}
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              height: "5vh",
              padding: "0 25px",
              borderTop: "1px solid #fff",
              boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.9)",
              color: "white",
            }}
          >
            <span>Total </span>
            <span>{this.calcTotal()}</span>
          </div>
        </div>
        <button
          type="submit"
          className="btn-submit-area "
          onClick={() => {
            this.props.dispatch({
              type: "PURCHASE_TICKET",
            });
          }}
        >
          Purchase
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.seat.seatList,
    ticketList: state.ticket.ticketList,
  };
};

export default connect(mapStateToProps)(TicketList);
