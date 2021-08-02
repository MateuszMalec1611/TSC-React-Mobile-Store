import styles from './Button.module.css';

export interface ButtonProps {
    click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, click }) => {
    const handleClick = () => (click ? click() : null);

    return (
        <button onClick={handleClick} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;
