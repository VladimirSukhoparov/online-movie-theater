import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types'

import classes from "../../styles/components/reusedСomponents/Button.module.scss";

const Button = (props) => {
  const mainCn = cn(
    props.classN === "footer_third_button" && classes.footer_third_button,
    props.classN === "header_subscribe" && classes.header_subscribe,

  );

  return (
    <button className={mainCn} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
    onClick : PropTypes.func,
    children: PropTypes.node,
    type:PropTypes.oneOf(['button', 'reset', 'submit']),
    classN:PropTypes.oneOf(['header_subscribe','footer_third_button']),
}
