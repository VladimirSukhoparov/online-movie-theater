import { FC, useRef } from "react";
import styles from "../../styles/components/posterComponents/PromptIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PromptIconProps {
    icon: IconDefinition;
    prompt: string;
}

const PromptIcon: FC<PromptIconProps> = ({ icon, prompt }) => {
    const promptDiv = useRef(null);
    return (
        <div className={styles.container} data-hover={prompt}>
            <FontAwesomeIcon
                icon={icon}
                className={styles.icon}
                onMouseEnter={() => {
                    promptDiv.current.style.display = "block";
                }}
                onMouseLeave={() => {
                    promptDiv.current.style.display = "none";
                }}
            />
            <div className={styles.prompt} ref={promptDiv}>
                {prompt}
            </div>
        </div>
    );
};

export default PromptIcon;
