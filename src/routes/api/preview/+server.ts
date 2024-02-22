import { redirectToPreviewURL } from "@prismicio/svelte/kit"
import { createClient } from "$lib/prismicio.js"
import { PRISMIC_ACCESS_TOKEN } from "$env/static/private"

export async function GET({ fetch, request, cookies }) {
	const client = createClient({ fetch, accessToken: PRISMIC_ACCESS_TOKEN })

	return await redirectToPreviewURL({ client, request, cookies })
}
