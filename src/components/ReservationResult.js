import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import happyImg from './../images/happy.svg'
import sadImg from './../images/sad.svg'
import brokenImg from './../images/broken.svg'
import './../styles/ReservationResult.css'

class ReservationResult extends Component {
    render() {
        let {
            isFailureReserve,
            seatInfo,
            description
        } = this.props

        if (seatInfo) {
            return (
                <ResultWrapper img={happyImg} type="success">
                    <p className="seat">
                        {seatInfo.zone}{seatInfo.seatId}
                    </p>
                    <p><b>Reservation ID:</b> {seatInfo.id}</p>
                    <p><b>Date:</b> {seatInfo.date}</p>
                </ResultWrapper>
            )
        } else if (isFailureReserve && description !== "") {
            return (
                <ResultWrapper img={sadImg} type="warning">
                    <p className="seat">No seats available</p>
                </ResultWrapper>
            )
        } else if (isFailureReserve) {
            return (
                <ResultWrapper img={brokenImg} type="failed">
                    <p className="seat">Connection failed</p>
                </ResultWrapper>
            )
        }
        return null
    }
}

const ResultWrapper = (props) => (
    <CardLayout size="6">
        <div className="row reservation-result">
            <div className={`col-4 emo emo-${props.type}`}>
                <img src={props.img} className="img-fluid" alt="alert"/>
            </div>
            <div className="col detail">
                {props.children}
            </div>
        </div>
    </CardLayout>
)

ReservationResult.propTypes = {
    isFailureReserve: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
}

export default ReservationResult