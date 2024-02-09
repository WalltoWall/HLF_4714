// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Item in *Navigation → Nav Items*
 */
export interface NavigationDocumentDataNavItemsItem {
	/**
	 * Label field in *Navigation → Nav Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.navItems[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField

	/**
	 * Link field in *Navigation → Nav Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.navItems[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
	/**
	 * Nav Items field in *Navigation*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.navItems[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	navItems: prismic.GroupField<Simplify<NavigationDocumentDataNavItemsItem>>
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<
		Simplify<NavigationDocumentData>,
		"navigation",
		Lang
	>

type PageDocumentDataSlicesSlice =
	| TextWithImageSlice
	| TwoColumnTextSlice
	| CenteredTextSlice
	| CallToActionSlice
	| AnchorSlice
	| PageIntroSlice
	| ImageSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField

	/**
	 * Parent field in *Page*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.parent
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	parent: prismic.ContentRelationshipField<"page">

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>

/**
 * Item in *Settings → Redirects*
 */
export interface SettingsDocumentDataRedirectsItem {
	/**
	 * From Path field in *Settings → Redirects*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.redirects[].fromPath
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	fromPath: prismic.KeyTextField

	/**
	 * To Path field in *Settings → Redirects*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.redirects[].toPath
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	toPath: prismic.KeyTextField

	/**
	 * Permanent? field in *Settings → Redirects*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: settings.redirects[].permanent
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	permanent: prismic.BooleanField
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.siteTitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	siteTitle: prismic.TitleField

	/**
	 * Site Description field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.siteDescription
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	siteDescription: prismic.RichTextField

	/**
	 * Site Copyright field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: {YEAR} will be replaced with the current year.
	 * - **API ID Path**: settings.siteCopyright
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	siteCopyright: prismic.KeyTextField

	/**
	 * Site Disclaimer field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.siteDisclaimer
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	siteDisclaimer: prismic.RichTextField /**
	 * Redirects field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.redirects[]
	 * - **Tab**: Redirects
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	redirects: prismic.GroupField<Simplify<SettingsDocumentDataRedirectsItem>> /**
	 * Footer Navigation field in *Settings*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.footerNavigation
	 * - **Tab**: Menus
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	footerNavigation: prismic.ContentRelationshipField<"navigation">
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithoutUID<
		Simplify<SettingsDocumentData>,
		"settings",
		Lang
	>

export type AllDocumentTypes =
	| NavigationDocument
	| PageDocument
	| SettingsDocument

/**
 * Primary content in *Anchor → Primary*
 */
export interface AnchorSliceDefaultPrimary {
	/**
	 * Anchor field in *Anchor → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anchor.primary.anchor
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	anchor: prismic.KeyTextField
}

/**
 * Default variation for Anchor Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AnchorSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<AnchorSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *Anchor*
 */
type AnchorSliceVariation = AnchorSliceDefault

/**
 * Anchor Shared Slice
 *
 * - **API ID**: `anchor`
 * - **Description**: Anchor
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AnchorSlice = prismic.SharedSlice<"anchor", AnchorSliceVariation>

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
	/**
	 * Subheading field in *CallToAction → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.primary.subheading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subheading: prismic.TitleField

	/**
	 * Heading field in *CallToAction → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField

	/**
	 * Text field in *CallToAction → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<CallToActionSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
	"call_to_action",
	CallToActionSliceVariation
>

/**
 * Primary content in *CenteredText → Primary*
 */
export interface CenteredTextSliceDefaultPrimary {
	/**
	 * Text field in *CenteredText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_text.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField
}

/**
 * Default variation for CenteredText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CenteredTextSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<CenteredTextSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *CenteredText*
 */
type CenteredTextSliceVariation = CenteredTextSliceDefault

/**
 * CenteredText Shared Slice
 *
 * - **API ID**: `centered_text`
 * - **Description**: CenteredText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CenteredTextSlice = prismic.SharedSlice<
	"centered_text",
	CenteredTextSliceVariation
>

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Image field in *Image → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<ImageSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>

/**
 * Primary content in *PageIntro → Primary*
 */
export interface PageIntroSliceDefaultPrimary {
	/**
	 * Heading field in *PageIntro → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page_intro.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField

	/**
	 * Navigation field in *PageIntro → Primary*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page_intro.primary.navigation
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	navigation: prismic.ContentRelationshipField<"navigation">
}

/**
 * Default variation for PageIntro Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageIntroSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<PageIntroSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *PageIntro*
 */
type PageIntroSliceVariation = PageIntroSliceDefault

/**
 * PageIntro Shared Slice
 *
 * - **API ID**: `page_intro`
 * - **Description**: PageIntro
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageIntroSlice = prismic.SharedSlice<
	"page_intro",
	PageIntroSliceVariation
>

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
	/**
	 * Subheading field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.subheading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subheading: prismic.TitleField

	/**
	 * Heading field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField
}

/**
 * Primary content in *TextWithImage → Items*
 */
export interface TextWithImageSliceDefaultItem {
	/**
	 * Image field in *TextWithImage → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>

	/**
	 * Text field in *TextWithImage → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * Button Text field in *TextWithImage → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.items[].buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField

	/**
	 * Button Link field in *TextWithImage → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.items[].buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<TextWithImageSliceDefaultPrimary>,
	Simplify<TextWithImageSliceDefaultItem>
>

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
	"text_with_image",
	TextWithImageSliceVariation
>

/**
 * Primary content in *TwoColumnText → Primary*
 */
export interface TwoColumnTextSliceDefaultPrimary {
	/**
	 * Right Text field in *TwoColumnText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: two_column_text.primary.rightText
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	rightText: prismic.RichTextField

	/**
	 * Left Text field in *TwoColumnText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: two_column_text.primary.leftText
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	leftText: prismic.RichTextField
}

/**
 * Default variation for TwoColumnText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TwoColumnTextSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<TwoColumnTextSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *TwoColumnText*
 */
type TwoColumnTextSliceVariation = TwoColumnTextSliceDefault

/**
 * TwoColumnText Shared Slice
 *
 * - **API ID**: `two_column_text`
 * - **Description**: TwoColumnText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TwoColumnTextSlice = prismic.SharedSlice<
	"two_column_text",
	TwoColumnTextSliceVariation
>

declare module "@prismicio/client" {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>
	}

	namespace Content {
		export type {
			NavigationDocument,
			NavigationDocumentData,
			NavigationDocumentDataNavItemsItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataRedirectsItem,
			AllDocumentTypes,
			AnchorSlice,
			AnchorSliceDefaultPrimary,
			AnchorSliceVariation,
			AnchorSliceDefault,
			CallToActionSlice,
			CallToActionSliceDefaultPrimary,
			CallToActionSliceVariation,
			CallToActionSliceDefault,
			CenteredTextSlice,
			CenteredTextSliceDefaultPrimary,
			CenteredTextSliceVariation,
			CenteredTextSliceDefault,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			PageIntroSlice,
			PageIntroSliceDefaultPrimary,
			PageIntroSliceVariation,
			PageIntroSliceDefault,
			TextWithImageSlice,
			TextWithImageSliceDefaultPrimary,
			TextWithImageSliceDefaultItem,
			TextWithImageSliceVariation,
			TextWithImageSliceDefault,
			TwoColumnTextSlice,
			TwoColumnTextSliceDefaultPrimary,
			TwoColumnTextSliceVariation,
			TwoColumnTextSliceDefault
		}
	}
}
