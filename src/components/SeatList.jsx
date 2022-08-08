import React, { Component } from "react";
import { connect } from "react-redux";

export class SeatList extends Component {
  handleEvent = (e) => {
    const seatItem = {
      seatRow: e.target.innerHTML.charAt(0),
      seatNumber: e.target.innerHTML,
    };

    this.props.dispatch({ type: "UPDATE_TICKET", payload: seatItem });
  };

  renderSeat = () => {
    return this.props.seatList.map((item, index) => {
      return (
        <div
          key={index}
          className="row w-100 px-6-- mb-3 position-relative justify-content-center"
          style={{ maxWidth: "800px" }}
        >
          <span className="seat-row-num">{item.row}</span>

          {item.seatRowList.map((item, index) => {
            let seatBooked = "";
            let seatSelected = "";
            let disabled = false;

            const foundSeat = this.props.ticketList.findIndex(
              (x) => x.seatNumber === item.seatNumber
            );
            if (foundSeat !== -1) {
              seatSelected = "selected";
            }

            if (item.booked) {
              seatBooked = "booked";
              disabled = true;
            }

            if (item.seatNumber.match(/^[0-9]+$/)) {
              return (
                <button
                  key={index}
                  className="seat-box col-1 gx-3"
                  style={{ cursor: "auto" }}
                  disabled={disabled}
                >
                  <div className="text-white" style={{ fontSize: "0.7rem" }}>
                    {item.seatNumber}
                  </div>
                </button>
              );
            }
            return (
              <button
                key={index}
                type="submit"
                className="seat-box col-1 gx-3"
                disabled={disabled}
                onClick={this.handleEvent}
              >
                <div
                  className={`seat unselected text-white ${seatBooked} ${seatSelected}`}
                  style={{ fontSize: "0.7rem" }}
                >
                  {item.seatNumber}
                </div>
              </button>
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center overflow-hidden">
        {this.renderSeat()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.seat.seatList,
    ticketList: state.ticket.ticketList,
  };
};

export default connect(mapStateToProps)(SeatList);
