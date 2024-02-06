import styles from "./index.module.scss";
import SubmitHandler from "../SubmitHandler";
import Heading from "../Heading";

const Form = () => {
	return (
		<div className={styles.hero}>
			<Heading />
			<SubmitHandler />
		</div>
	);
};

export default Form;
