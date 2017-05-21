import validate from 'validate.js';

export default function validateAll(user) {

	const constraints = {
		name: {
			presence: true
		},
		password: {
			presence: true
		},
		email: {
			email: true
		}
	};

	return validate(user, constraints);

}
