import styles from "./button.module.css";

const Button = ({buttonStyle, color, children}) => {
    const buttonColor = `${styles[buttonStyle]} ${styles[color]}`;

    return <button className={buttonColor}>{children}</button>
}
export default Button