import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return json({ date: new Date() });
};
