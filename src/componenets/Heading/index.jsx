import styles from "./index.module.scss";
import { useState, useEffect } from "react";

const Heading = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");

	function toggleGetData(decoded) {
		setName(decoded?.Name);
		setSurname(decoded?.Surname);
		setAge(decoded?.Age);
		console.log(decoded);
	}

	useEffect(() => {
		if (window) {
			const searchParams = new URLSearchParams(window.location.search);
			const value = searchParams.get("userData");
			const decoded = atob(value);
			toggleGetData(JSON.parse(decoded));
		}
	}, []);

	return (
		<div className={styles.heading}>
			<div>
				<h2 className={styles.head}>User Info</h2>
			</div>

			<div className={styles.data}>
				<div className={styles.user}>
					<div>Name</div>
					<div>Surname</div>
					<div>Age</div>
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
