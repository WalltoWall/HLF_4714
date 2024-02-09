import { asText } from "@prismicio/client"
import { createClient } from "$lib/prismicio"
import { PRISMIC_ACCESS_TOKEN } from "$env/static/private"

export async function load({ fetch, cookies }) {
	const client = createClient({
		fetch,
		cookies,
		accessToken: PRISMIC_ACCESS_TOKEN
	})

	const page = await client.getByUID("page", "home", {
		fetchLinks: ["navigation.navItems"]
	})

	return {
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	}
}

export function entries() {
	return [{}]
}
