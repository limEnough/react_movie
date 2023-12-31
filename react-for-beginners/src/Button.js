import PropTypes from "prop-types";
// css코드를 javascript 오브젝트로 변환하여 가지고 있음
import styles from "./Button.module.css";

function Button({text}) {
  return (
    <button
      className={styles.btn}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;