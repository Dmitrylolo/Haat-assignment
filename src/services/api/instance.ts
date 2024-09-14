import ky from 'ky';

const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;
const token = process.env.TOKEN ? process.env.TOKEN : '';

export const instance = ky.extend({
	prefixUrl,
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		'Accept-Language': 'en-US',
	},
});
