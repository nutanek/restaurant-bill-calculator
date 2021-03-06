import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import billImg from './../images/receipt.svg'
import './../styles/BillPaper.css'

class BillPaper extends Component {
    getCurrentTime() {
        var d = new Date()
        return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
    }

    render() {
        const {
            custNum,
            subtotal,
            total,
            isDisplayBill
        } = this.props

        if (isDisplayBill) {
            return (
                <CardLayout size="5">
                    <div className="bill-paper">
                        <div className="row icon justify-content-center">
                            <img src={billImg} alt="bill" />
                        </div>
                        <div className="row header justify-content-center">
                            THANK YOU
                        </div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>STATUS</td>
                                    <td className="text-warning">Pending</td>
                                </tr>
                                <tr>
                                    <td>DATE</td>
                                    <td>{this.getCurrentTime()}</td>
                                </tr>
                                <tr className="under">
                                    <td>SEAT(s)</td>
                                    <td>{custNum}</td>
                                </tr>
                                <tr>
                                    <td>SUBTOTAL</td>
                                    <td>฿{subtotal.toFixed(2)}</td>
                                </tr>
                                <tr className="under">
                                    <td>DISCOUNT</td>
                                    <td className="text-danger">
                                        -฿{(subtotal - total).toFixed(2)}
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td colSpan="2">
                                        <span>TOTAL</span>
                                        <span className="total text-success">
                                            ฿{total.toFixed(2)}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardLayout>
            )
        }
        return null
    }
}

BillPaper.propTypes = {
    custNum: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    isDisplayBill: PropTypes.bool.isRequired
}

export default BillPaper