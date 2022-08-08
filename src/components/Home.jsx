import "./style.css";
import React, { Component } from "react";
import SeatList from "./SeatList";
import TicketList from "./TicketList";
import seatData from "./../data/seatList.json";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="row h-100 g-0 main-item">
          <div className="col-6 p-5">
            <div className="seat-area">
              <div className="screen">
                <span
                  style={{
                    color: "#000",
                    marginBottom: "5px",
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    fontWeight: "700",
                    backgroundColor: "yellow",
                    padding: "10px 200px",
                  }}
                >
                  SCREEN THIS WAY
                </span>
              </div>

              <SeatList />

              <div
                className="row mt-3 pt-2 px-5 d-flex justify-content-center align-items-center m-auto"
                style={{ maxWidth: "800px" }}
              >
                <div className="col-4 d-flex justify-content-center align-item-center">
                  <span className="text-white me-2">Available</span>
                  <div className="seat-box w-25 px-2">
                    <div className="seat"></div>
                  </div>
                </div>

                <div className="col-4 d-flex justify-content-center align-item-center">
                  <span className="text-white me-2">Selected</span>
                  <div className="seat-box w-25 px-2">
                    <div className="seat selected"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="h-80 bg-black d-flex flex-column justify-content-between">
              <div
                className="text-white"
                style={{
                  marginTop: "20px",
                  height: "5vh",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "700",
                  marginLeft: "20px",
                  marginBottom: "10px",
                }}
              >
                Your Ticket
              </div>
              <TicketList />
            </div>
          </div>
        </div>
      </div>
    );
  }

  fetchSeats = async () => {
    try {
      const action = {
        type: "UPDATE_SEAT_LIST",
        payload: seatData,
      };

      this.props.dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchSeats();
  }
}

export default connect()(Home);
