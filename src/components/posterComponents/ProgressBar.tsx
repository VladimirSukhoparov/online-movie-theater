import { FC } from "react";
import styles from "../../styles/components/posterComponents/ProgressBar.module.scss";

interface ProgressBarProps {
    progress: number;
    className?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ className, progress }) => {
    return (
        <div className={className}>
            <div className={styles.container}>
                <div
                    className={styles.progress}
                    style={{ width: progress * 100 + "%" }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
