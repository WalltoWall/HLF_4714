import { asText } from "@prismicio/client"
import { APIClient } from "$lib/api"

export async function load({ params, fetch, cookies }) {
	const client = new APIClient({
		fetch,
		cookies
	})

	const [page, people] = await Promise.all([
		client.getPage(params.uid),
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

export async function entries() {
	const client = new APIClient()
	const pages = await client.getAllPages()

	return pages
		.map((page) => ({ uid: page.uid }))
		.filter((page) => page.uid !== "home")
}
