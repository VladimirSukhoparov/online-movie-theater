import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import classes from "../../styles/components/reusedСomponents/HeaderBody.module.scss";

const HeaderBody = (props) => {
  const mainCn = cn(
    props.classN === "notification" && classes.notification,
    props.classN === "login" && classes.login,
    props.classN === "movies" && classes.movies,
    props.classN === "series" && classes.series,
    props.classN === "cartoons" && classes.cartoons,
    props.classN === "tv" && classes.tv
  );

  return <div className={mainCn}>{props.children}</div>;
};

export default HeaderBody;
