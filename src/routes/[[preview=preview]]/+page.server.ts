import { asText } from "@prismicio/client"
import { APIClient } from "$lib/api.js"

export async function load({ fetch, cookies }) {
	const client = new APIClient({
		fetch,
		cookies
	})

	const [page, people] = await Promise.all([
		client.getPage("home"),
		client.getAllPeople()
	])

	return {
		page,
		people,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	}
}

export function entries() {
	return [{}]
}
