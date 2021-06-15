export interface PathSegment {
  label: string
  href: string
}

export interface StoryMetadata {
  title: string
  description?: string
  path: [parent: PathSegment, item: PathSegment]
}

export type StoryModule = Record<string, () => JSX.Element> & {
  meta?: StoryMetadata
}
