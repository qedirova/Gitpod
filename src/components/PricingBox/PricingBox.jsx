import s from "./style.module.scss"
import React from "react";

export const PricingBox = () => {
    return (
        <div className={s.pricing}>

                <h2>Sign up to be the first to receive matches.</h2>

                <div className={s.option}>
                    <div>1 month</div>
                    <div>9.99$</div>
                </div>
                <div className={s.option}>
                    <div>12 month</div>
                    <div>99.99$</div>
                </div>
                <div className={s.option}>
                    <div>24 month</div>
                    <div>199.99$</div>
                </div>

                <button className={s.btnPurchase}>Purchase now</button>

        </div>
    )
}