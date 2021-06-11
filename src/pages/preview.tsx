import * as React from 'react'
import { PageProps } from 'gatsby'
import {
  withPreviewResolver,
  WithPreviewResolverProps,
} from 'gatsby-source-prismic'

import { linkResolver } from '../linkResolver'

type PreviewPageProps = PageProps & WithPreviewResolverProps

export const PreviewPage = ({ isPreview }: PreviewPageProps) => {
  if (isPreview === false)
    return (
      <p className="py-12">
        You're on the preview page, but it looks like we don't have any data to
        preview!
      </p>
    )

  return (
    <div className="flex justify-center py-12">
      <svg
        className="w-8 h-8 text-teal-45 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
  //@ts-ignore
  linkResolver,
  pathResolver: () => () => '/',
})
