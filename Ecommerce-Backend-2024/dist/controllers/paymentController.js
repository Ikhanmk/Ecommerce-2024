import { TryCatch } from "../middlewares/error.js";
import { Coupon } from "../models/coupon.js";
import ErrorHandler from "../utils/utility-class.js";
export const newCoupon = TryCatch(async (req, res, next) => {
    const { coupon, amount } = req.body;
    if (!coupon || !amount)
        return next(new ErrorHandler("Please enter coupon and amount", 400));
    await Coupon.create({ code: coupon, amount });
    return res.status(201).json({
        success: true,
        message: `Coupon ${coupon} created successfully`,
    });
});
export const applyDiscount = TryCatch(async (req, res, next) => {
    const { coupon } = req.query;
    const discount = await Coupon.findOne({ code: coupon });
    if (!discount)
        return next(new ErrorHandler("Invalid Coupon Code", 400));
    return res.status(200).json({
        success: true,
        discount: discount.amount,
    });
});
export const allCoupons = TryCatch(async (req, res, next) => {
    const coupons = await Coupon.find({});
    if (!coupons)
        return next(new ErrorHandler("No Coupons Found", 404));
    return res.status(200).json({
        success: true,
        coupons,
    });
});
export const deleteCoupon = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const coupon = await Coupon.findByIdAndDelete(id);
    if (!coupon)
        return next(new ErrorHandler("Invalid Coupon Id", 400));
    return res.status(200).json({
        success: true,
        message: `coupon ${coupon.code} deleted successfully`,
    });
});
