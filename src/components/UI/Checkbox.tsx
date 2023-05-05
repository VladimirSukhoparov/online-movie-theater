import { FC, useState } from "react";
import styles from "../../styles/components/UI/Checkbox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export enum CheckboxTypeEnum {
  SIMPLE = "SIMPLE",
  TICK = "TICK",
  IMAGE = "IMAGE",
}

export type CheckboxType =
  | CheckboxTypeEnum.SIMPLE
  | CheckboxTypeEnum.TICK
  | CheckboxTypeEnum.IMAGE;

interface CheckboxProps {
  type: CheckboxType;
  name: string;
  icon?: IconDefinition;
}

const Checkbox: FC<CheckboxProps> = ({ type, name, icon }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  let isShowIcon, style;
  switch (type) {
    case CheckboxTypeEnum.TICK:
      isShowIcon = isChecked || isHover;
      style = "tick-label";
      break;
    case CheckboxTypeEnum.IMAGE:
      style = "image-label";
      isShowIcon = true;
      break;
    case CheckboxTypeEnum.SIMPLE:
      style = "simple-label";
      isShowIcon = false;
  }

  return (
    <label
      className={[
        styles[style],
        isChecked ? styles[style + "_checked"] : null,
      ].join(" ")}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <input
        type="checkbox"
        value={name}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span>{name}</span>
      {isShowIcon && <FontAwesomeIcon icon={icon} />}
    </label>
  );
};

export default Checkbox;
