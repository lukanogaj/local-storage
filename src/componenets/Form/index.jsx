import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
// import Heading from "../Heading";

const Form = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [cookies, setCookie] = useCookies(["user"]);

	//// Use function from sibling component
	// const handleSubbmission = () => {
	// 	localStorage.clear();
	// 	let userData = {
	// 		Name: name,
	// 		Surname: surname,
	// 		Age: age,
	// 	};
	// 	console.log(typeof userData);
	// 	// console.log(JSON.stringify(userData));

	// 	/////////////////////////////
	// 	// Base 64
	// 	// Get user data from form
	// 	const jasonObject = JSON.stringify(userData);
	// 	console.log(jasonObject);
	// 	// Encode into base64
	// 	const base64DataEncode = btoa(jasonObject);
	// 	// Add it as query paremeter user_data
	// 	const searchParams = new URLSearchParams();
	// 	searchParams.append("userData", base64DataEncode);
	// 	console.log(searchParams);
	// 	// Decode form 64 read the values from query param
	// 	const myParam = searchParams.get("userData");
	// 	console.log(myParam);
	// 	// Decode from base64
	// 	const decodeUserData = atob(myParam);
	// 	console.log(decodeUserData);
	// 	// Parse the JSON Object
	// 	const parseUserData = JSON.parse(decodeUserData);
	// 	console.log(parseUserData);
	// 	// Loop through object

	// 	// console.log(loopObject());

	// 	////////////////////////////////////
	// 	const handleCookie = () => {
	// 		setCookie("userData", JSON.stringify(userData), { path: "/" });
	// 	};
	// 	handleCookie();
	// 	localStorage.setItem("userInfo", JSON.stringify(userData));
	// 	alert("Data recorded");
	// 	window.location.reload();
	// };

	return (
		<div className={styles.hero}>
			<Heading name={name} />
			<Input />
		</div>
	);
};
/////////////////////
// Heading with using the Json object

const Heading = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");

	let userInfo = "";
	function toggleGetData() {
		userInfo = JSON.parse(localStorage.getItem("userInfo"));
		setName(userInfo?.Name);
		setSurname(userInfo?.Surname);
		setAge(userInfo?.Age);
	}

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
// Input div with all the data to submit
const Input = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [userData, setUserData] = useState("");
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
		// Get user data from form
		const jasonObject = JSON.stringify(userData);
		console.log(jasonObject);
		// Encode into base64
		const base64DataEncode = btoa(jasonObject);
		// Add it as query paremeter user_data
		const searchParams = new URLSearchParams();
		searchParams.append("userData", base64DataEncode);
		console.log(searchParams);
		// Decode form 64 read the values from query param
		const myParam = searchParams.get("userData");
		console.log(myParam);
		// Decode from base64
		const decodeUserData = atob(myParam);
		console.log(decodeUserData);
		// Parse the JSON Object
		const parseUserData = JSON.parse(decodeUserData);
		console.log(parseUserData);
		// Loop through object

		// console.log(loopObject());

		////////////////////////////////////
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
			{/* <div>
				{parseUserData.map((item) => (
					<div>Hello</div>
				))}
			</div> */}
		</div>
	);
};
export default Form;
