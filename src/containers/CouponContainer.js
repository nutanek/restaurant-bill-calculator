import React from 'react'
import { connect } from 'react-redux'
import { fetchCoupon, addCoupon, removeCoupon, updateCoupon } from './../actions/CouponActions'
import Coupon from './../components/Coupon'

const CouponContainer = props => <Coupon {...props} />

const mapStateToProps = (state) => {
    const { Coupon } = state
    return {
        Coupon
    }
}

export default connect(mapStateToProps, {
    fetchCoupon,
    addCoupon,
    removeCoupon,
    updateCoupon
})(CouponContainer)