import { type LinkResolverFunction } from '@prismicio/client'

export const linkResolver: LinkResolverFunction = (doc) => {
	if (doc.uid === 'home') return '/'
	if (!doc.url) return `/${doc.uid}`

	return doc.url
}
