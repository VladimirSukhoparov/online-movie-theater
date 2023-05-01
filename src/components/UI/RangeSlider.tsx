import { FC, useRef, useState } from "react";
import styles from "../../styles/components/UI/RangeSlider.module.scss";

interface SliderProps {
  step: number;
  min: number;
  max: number;
  name: string;
}

const RangeSlider: FC<SliderProps> = ({ step, min, max, name }) => {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const pointerRef = useRef(null);
  const lineRef = useRef(null);
  const sliderRef = useRef(null);

  const correctBigValue = (n: number) => {
    if (n >= 1000000) {
      return `${Math.floor(n / 1000000)} млн`;
    } else if (n >= 1000) {
      return `${Math.floor(n / 1000)} тыс`;
    } else {
      return n.toString();
    }
  };

  const onSliderMouseMove = (event) => {
    if (isActive) {
      moveTo(event.clientX);
    }
  };

  const onSliderMouseDown = (event) => {
    setIsActive(true);
    moveTo(event.clientX);
  };

  const moveTo = (x: number) => {
    const sliderLeft = sliderRef.current.getBoundingClientRect().left;
    const sliderRight = sliderRef.current.getBoundingClientRect().right;
    const pointerWidth = pointerRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;

    const minX = sliderLeft + pointerWidth / 2 - 1;
    const maxX = sliderRight - pointerWidth / 2 + 1;

    if (x > minX && x < maxX) {
      const newPointerPosition = x - sliderLeft - pointerWidth / 2;
      pointerRef.current.style.left = newPointerPosition + "px";

      const newLineWidth = sliderRight - x + pointerWidth / 2;
      lineRef.current.style.width = newLineWidth + "px";

      const stepPixels = ((sliderWidth - pointerWidth) / (max - min)) * step;
      const newValue =
        Math.round((newPointerPosition / stepPixels) * step * (1 / step)) /
        (1 / step);
      setValue(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div
        className={styles.slider}
        ref={sliderRef}
        onMouseMove={onSliderMouseMove}
        onMouseLeave={() => setIsActive(false)}
        onMouseDown={onSliderMouseDown}
        onMouseUp={() => setIsActive(false)}
      >
        <div className={styles.line} ref={lineRef}></div>
        <div className={styles.pointer} ref={pointerRef}>
          <span className={styles.value}>{correctBigValue(value)}</span>
        </div>
        <span className={styles.min}>{correctBigValue(min)}</span>
        <span className={styles.max}>{correctBigValue(max)}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
