import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import React from "react";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};
