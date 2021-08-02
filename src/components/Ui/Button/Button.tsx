import styles from './Button.module.css';

export interface ButtonProps {
    click?: () => void;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, click, isDisabled }) => {
    const handleClick = () => (click ? click() : null);

    return (
        <button disabled={isDisabled} onClick={handleClick} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;
