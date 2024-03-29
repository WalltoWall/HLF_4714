import { APIClient } from "$lib/api.js"

export const prerender = "auto"

export async function load({ fetch, cookies }) {
	const client = new APIClient({ fetch, cookies })
	const settings = await client.getSettings()

	return { settings }
}
