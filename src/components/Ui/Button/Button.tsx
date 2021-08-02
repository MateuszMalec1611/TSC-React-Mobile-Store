import styles from './Button.module.css';

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={styles.button}>{children}</button>;
};

export default Button;
