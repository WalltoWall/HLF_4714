import type { AllDocumentTypes } from "../prismicio-types"
import type { CreateClientConfig } from "@prismicio/svelte/kit"
import { createClient as createPrismicClient } from "./prismicio"
import { PRISMIC_ACCESS_TOKEN } from "$env/static/private"
import type { Client } from "@prismicio/client"

export class APIClient {
	private prismic: Client<AllDocumentTypes>

	constructor(args: Pick<CreateClientConfig, "fetch" | "cookies"> = {}) {
		this.prismic = createPrismicClient({
			...args,
			accessToken: PRISMIC_ACCESS_TOKEN
		})
	}

	async getPage(uid: string) {
		const page = await this.prismic.getByUID("page", uid, {
			fetchLinks: ["navigation.navItems"]
		})

		return page
	}

	async getAllPages() {
		const pages = await this.prismic.getAllByType("page")

		return pages
	}

	async getSettings() {
		const settings = await this.prismic.getSingle("settings", {
			fetchLinks: ["navigation.navItems"]
		})

		return settings
	}

	async getAllPeople() {
		const people = await this.prismic.getAllByType("person")

		return people
	}
}
