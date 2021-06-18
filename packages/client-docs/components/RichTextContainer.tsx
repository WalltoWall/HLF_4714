import React from 'react'

interface Props {
  children: React.ReactNode
}

export let RichTextContainer = ({ children }: Props) => {
  return (
    <div className="mt-8 prose-sm prose prose-docsCyan lg:prose lg:prose-docsCyan">
      {children}
    </div>
  )
}
