import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import classes from "../../styles/components/reusedСomponents/HeaderBody.module.scss";

const HeaderBody = (props) => {
  const mainCn = cn(
    props.classN === "notification" && classes.notification,
    props.classN === "login" && classes.login,

  );

  return <div className={mainCn}>{props.children}</div>;
};

export default HeaderBody;
