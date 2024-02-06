import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";

const SubmitHandler = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [cookies, setCookie] = useCookies(["user"]);

	///  Function for submit form and store in local storage, encode and decode in base 64
	const handleSubmit = () => {
		localStorage.clear();
		let userData = {
			Name: name,
			Surname: surname,
			Age: age,
		};

		// Base 64
		// Get user data from form
		const jasonObject = JSON.stringify(userData);
		console.log(typeof jasonObject);

		if (window) {
			console.log(window);
			const encoded = btoa(jasonObject);
			console.log(encoded);
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set("userData", encoded);
			window.location.search = searchParams;
			console.log(searchParams);
		}

		////////////////////////////////////
		const handleCookie = () => {
			setCookie("userData", JSON.stringify(userData), { path: "/" });
		};
		handleCookie();
		localStorage.setItem("userInfo", JSON.stringify(userData));
	};

	return (
		<div className={styles.form}>
			<div>
				<div className={styles.enteredDate}>
					<span> Name</span>
					<input
						type="text"
						placeholder="John"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className={styles.enteredDate}>
					<span>Surname </span>
					<input
						type="text"
						placeholder="Handsome"
						onChange={(e) => setSurname(e.target.value)}
					/>
				</div>
				<div className={styles.enteredDate}>
					<span>Age</span>
					<input
						type="text"
						placeholder="41"
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
			</div>
			<div>
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default SubmitHandler;
