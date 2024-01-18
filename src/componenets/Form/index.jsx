import styles from "./index.module.scss";
import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";

import Heading from "../Heading";

const Form = ({ toggleGetData }) => {
	return (
		<div className={styles.hero}>
			<Heading toggleGetData={toggleGetData} />
			<Input />
		</div>
	);
};

/////////////////////////

// Input div with all the data to submit
const Input = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	///// States for the cookies and  query parametres
	const [cookies, setCookie] = useCookies(["user"]);

	///  Function for submit form and store in local storage
	const handleSubbmission = () => {
		localStorage.clear();
		let userData = {
			Name: name,
			Surname: surname,
			Age: age,
		};
		console.log(typeof userData);
		// console.log(JSON.stringify(userData));

		/////////////////////////////
		// Base 64

		// Enocode into 64 and change javascript object into JSON object
		const jasonObject = JSON.stringify(userData);
		console.log(jasonObject);
		///
		const base64DataEncode = btoa(userData);
		console.log(typeof base64DataEncode);
		// Decode form 64
		const base64DataDecode = atob(base64DataEncode);
		console.log(base64DataDecode);
		// URL Search Params
		const searchParams = new URLSearchParams();
		Object.keys(jasonObject).forEach((key) =>
			searchParams.append(key, jasonObject[key])
		);

		console.log(searchParams.toString());
		// console.log(userData);
		// Function to set the cookies
		const handleCookie = () => {
			setCookie("userData", JSON.stringify(userData), { path: "/" });
		};
		handleCookie();
		localStorage.setItem("userInfo", JSON.stringify(userData));
		alert("Data recorded");
		window.location.reload();
	};

	// Function to get items back and show in heading

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
				<button type="submit" disabled={!name} onClick={handleSubbmission}>
					Submit
				</button>
			</div>
		</div>
	);
};
export default Form;
