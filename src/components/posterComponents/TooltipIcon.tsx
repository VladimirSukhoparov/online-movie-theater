import { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/components/posterComponents/TooltipIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { createPortal } from "react-dom";

interface PromptIconProps {
  icon: IconDefinition;
  text: string;
}

const PromptIcon: FC<PromptIconProps> = ({ icon, text }) => {
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const cont = containerRef.current.getBoundingClientRect();
      tooltipRef.current.style.marginTop = cont.y + window.scrollY - 30 + "px";
      tooltipRef.current.style.marginLeft = cont.x + window.scrollX + "px";
    }
  }, [isVisible]);

  return (
    <div className={styles.container} ref={containerRef}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible
        ? createPortal(
            <div className={styles.tooltip} ref={tooltipRef}>
              {text}
            </div>,
            document.body
          )
        : null}
      ;
    </div>
  );
};

export default PromptIcon;
