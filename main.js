class FormValidator {
	constructor(form, fields) {
		this.form = form
		this.fields = fields
	}

	initialize() {
		this.validateOnEntry()
		this.validateOnSubmit()
	}

	validateOnSubmit() {
		let self = this

		this.form.addEventListener('submit', (e) => {
			e.preventDefault()
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`)
				self.validateFields(input)
			})
		})
	}

	validateOnEntry() {
		let self = this
		this.fields.forEach((field) => {
			const input = document.querySelector(`#${field}`)
			input.addEventListener('input', (event) => {
				self.validateFields(input)
			})
		})
	}

	validateFields(field) {
		// Check if fields are empty
		if (field.value.trim() === '') {
			this.setStatus(field, `${field.placeholder} cannot be blank`, 'error')
		} else {
			this.setStatus(field, null, 'success')
			//Check First Name and Last Name Format
			if (field.id === 'fname' || field.id === 'lname') {
				const re = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
				if (re.test(field.value)) {
					this.setStatus(field, null, 'success')
				} else {
					this.setStatus(field, `Invalid ${field.placeholder} format`, 'error')
				}
			}
			// Check for valid email
			if (field.type === 'email') {
				const re = /\S+@\S+\.\S+/
				if (re.test(field.value)) {
					this.setStatus(field, null, 'success')
				} else {
					this.setStatus(field, 'Looks like this is not an email', 'error')
				}
			}
			//Check password format
			if (field.id === 'password') {
				const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
				if (re.test(field.value)) {
					this.setStatus(field, null, 'success')
				} else {
					this.setStatus(
						field,
						'One num, one lower & upper char, min 8 chars',
						'error'
					)
				}
			}
		}
	}

	setStatus(field, message, status) {
		const errorIcon = field.parentElement.querySelector('.error-icon')
		const errorMessage = field.parentElement.querySelector('.error-text')

		if (status === 'success') {
			if (errorIcon) {
				errorIcon.classList.add('hidden')
			}
			if (errorMessage) {
				errorMessage.innerText = ''
			}
			field.classList.remove('input-error')
		}
		if (status === 'error') {
			field.parentElement.querySelector('.error-text').innerText = message
			errorIcon.classList.remove('hidden')
			field.classList.add('input-error')
		}
	}
}

const form = document.querySelector('form')
const fields = ['fname', 'lname', 'email', 'password']

const validator = new FormValidator(form, fields)

validator.initialize()
