import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_API_BASE_URL}/api/time`);
	const data = await res.json();

	return data;
};
