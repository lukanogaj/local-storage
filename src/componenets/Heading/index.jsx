import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Heading = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");

	let userInfo = "";
	function toggleGetData() {
		userInfo = JSON.parse(localStorage.getItem("userInfo"));
		setName(userInfo.Name);
		setSurname(userInfo.Surname);
		setAge(userInfo.Age);
	}

	///  try to use useEffect to show data back

	useEffect(() => {
		toggleGetData();
	});

	return (
		<div className={styles.heading}>
			<div>
				<h2 className={styles.head}>User Info</h2>
			</div>

			<div className={styles.data}>
				<div className={styles.user}>
					<div> Name - </div>
					<div> Surname- </div>
					<div> Age - </div>
				</div>
				<div className={styles.userData}>
					<div>{name}</div>
					<div>{surname}</div>
					<div>{age}</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;
