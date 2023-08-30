import { useState } from "react";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstNameError, setFirstNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

	const validateInputs = (e) => {
		e.preventDefault();
		let formIsValid = true;
		// First Name

		if (firstName.length < 2) {
			setFirstNameError("First Name must be 2 characters or longer!");
			formIsValid = false;
		} else {
			setFirstNameError("");
		}
		// Last Name
		if (lastName.length < 2) {
			setLastNameError("Last Name must be 2 characters or longer!");
			formIsValid = false;
		} else {
			setLastNameError("");
		}
		// Email
		if (email.length < 5) {
			setEmailError("Email must be 5 characters or longer!");
			formIsValid = false;
		} else {
			setEmailError("");
		}
		// Password
		if (password.length < 8) {
			setPasswordError("Password must be 8 characters or longer!");
			formIsValid = false;
		} else {
			setPasswordError("");
		}
		// Confirm Password
		if (confirmPassword !== password) {
			setConfirmPasswordError("Passwords do not match!");
			formIsValid = false;
		} else {
			setConfirmPasswordError("");
		}

		if (formIsValid) {
			createUser();
			setFirstNameError("");
			setLastNameError("");
			setEmailError("");
			setPasswordError("");
			setConfirmPasswordError("");
		}
	};

	const createUser = (e) => {
		const newUser = { firstName, lastName, email, password, confirmPassword };
		console.log("Welcome", newUser);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");

		setHasBeenSubmitted(true);
	};

	return (
		<div className="card shadow w-50 mx-auto">
			<div className="my-3 text-center">
				{hasBeenSubmitted ? (
					<h3>Thank you for submitting the form!</h3>
				) : (
					<h3>Welcome, please submit the form.</h3>
				)}
			</div>
			<div className="card-header">Create User Form</div>
			<div className="card-body">
				<form onSubmit={validateInputs}>
					<div className="mb-3">
						<label className="form-label">First Name:</label>
						<input
							type="text"
							className="form-control"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						{firstNameError ? <p className="form-text text-danger">{firstNameError}</p> : ""}
					</div>
					<div className="mb-3">
						<label className="form-label">Last Name:</label>
						<input
							type="text"
							className="form-control"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						{lastNameError ? <p className="form-text text-danger">{lastNameError}</p> : ""}
					</div>
					<div className="mb-3">
						<label className="form-label">Email:</label>
						<input
							type="text"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{emailError ? <p className="form-text text-danger">{emailError}</p> : ""}
					</div>
					<div className="mb-3">
						<label className="form-label">Password:</label>
						<input
							type="password"
							className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{passwordError ? <p className="form-text text-danger">{passwordError}</p> : ""}
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password:</label>
						<input
							type="password"
							className="form-control"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						{confirmPasswordError ? <p className="form-text text-danger">{confirmPasswordError}</p> : ""}
					</div>
					<div className="text-end">
						{firstName && lastName && email && password && confirmPassword ? (
							<button type="submit" className="btn btn-success w-25">
								Submit
							</button>
						) : (
							<button type="submit" className="btn btn-success w-25" disabled>
								Submit
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
