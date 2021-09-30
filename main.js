//validate FirstName
function validateFirstName() {
	const firstName = $('#fname').val();
	const $firstNameInput = $('#fname');
	const $fNameErrorIcon = $('#fname-error-icon');
	const $fNameErrorText = $('#fname-error-text');

	if (firstName === '' || firstName == null) {
		$fNameErrorIcon.css({ display: 'block' });
		$fNameErrorText.css({ display: 'block' });
		$firstNameInput.css({ border: '2px solid #ff7a7a' });
	} else {
		$fNameErrorIcon.css({ display: 'none' });
		$fNameErrorText.css({ display: 'none' });
		$firstNameInput.css({ border: '1px solid #dedede' });
	}
}

//validate LastName
function validateLastName() {
	const lastName = $('#lname').val();
	const $lastNameInput = $('#lname');
	const $lNameErrorIcon = $('#lname-error-icon');
	const $lNameErrorText = $('#lname-error-text');

	if (lastName === '' || lastName == null) {
		$lNameErrorIcon.css({ display: 'block' });
		$lNameErrorText.css({ display: 'block' });
		$lastNameInput.css({ border: '2px solid #ff7a7a' });
	} else {
		$lNameErrorIcon.css({ display: 'none' });
		$lNameErrorText.css({ display: 'none' });
		$lastNameInput.css({ border: '1px solid #dedede' });
	}
}

//validate Email
function validateEmail() {
	const email = $('#email').val();
	const $emailInput = $('#email');
	const $emailErrorIcon = $('#email-error-icon');
	const $emailErrorText = $('#email-error-text');

	function checkEmail(email) {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	if (email === '' || email == null) {
		$emailErrorIcon.css({ display: 'block' });
		$emailErrorText.css({ display: 'block' });
		$emailInput.css({ border: '2px solid #ff7a7a' });
	} else if (!checkEmail(email)) {
		$emailErrorIcon.css({ display: 'block' });
		$emailErrorText
			.text('Looks like this is not an email')
			.css({ display: 'block' });
		$emailInput.css({ border: '2px solid #ff7a7a', color: '#ff7a7a' });
	} else {
		$emailErrorIcon.css({ display: 'none' });
		$emailErrorText.css({ display: 'none' });
		$emailInput.css({ border: '1px solid #dedede', color: '#3e3c49' });
	}
}

//validate Password
function validatePassword() {
	const password = $('#password').val();
	const $passwordInput = $('#password');
	const $passwordErrorIcon = $('#password-error-icon');
	const $passwordErrorText = $('#password-error-text');

	if (password === '' || password == null) {
		$passwordErrorIcon.css({ display: 'block' });
		$passwordErrorText.css({ display: 'block' });
		$passwordInput.css({ border: '2px solid #ff7a7a' });
	} else {
		$passwordErrorIcon.css({ display: 'none' });
		$passwordErrorText.css({ display: 'none' });
		$passwordInput.css({ border: '1px solid #dedede' });
	}
}

$('#submit').click(function (e) {
	validateFirstName();
	validateLastName();
	validateEmail();
	validatePassword();
	e.preventDefault();
});
