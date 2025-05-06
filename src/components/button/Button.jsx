import styles from "./button.module.css";

const Button = ({buttonStyle, children}) => {
    return <button className={buttonStyle}>{children}</button>
}
export default Button