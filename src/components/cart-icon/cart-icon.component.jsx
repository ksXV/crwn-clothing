import React from "react";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
