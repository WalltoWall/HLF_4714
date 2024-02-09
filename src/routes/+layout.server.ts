import { PRISMIC_ACCESS_TOKEN } from "$env/static/private"
import { createClient } from "$lib/prismicio"

export const prerender = "auto"

export async function load({ fetch, cookies }) {
	const client = createClient({
		fetch,
		cookies,
		accessToken: PRISMIC_ACCESS_TOKEN
	})

	const settings = await client.getSingle("settings", {
		fetchLinks: ["navigation.navItems"]
	})

	return { settings }
}
