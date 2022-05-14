export function get() {
	return {
		status: 200,
		body: {
			ping: 'Server is up'
		}
	};
}

export async function post({ request }) {
	const body = await request.json();

	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			body
		}
	};
}
