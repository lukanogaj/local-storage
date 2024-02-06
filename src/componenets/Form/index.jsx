import styles from "./index.module.scss";
import SubmitHandler from "../SubmitHandler";
import Heading from "../Heading";
import { useState, useEffect } from "react";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const Form = () => {
	return (
		<div className={styles.hero}>
			<Heading />
			<SubmitHandler />
		</div>
	);
};

export default Form;
