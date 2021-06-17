import * as React from 'react'
import * as faker from 'faker'
import html from 'ts-dedent'

import { ContentLayout } from '../components/ContentLayout'

interface TypoSampleProps {
  label: string
  sampleContent: string
  sampleClassName: string
}

let TypoSample = ({
  label,
  sampleContent,
  sampleClassName,
}: TypoSampleProps) => {
  return (
    <div className="space-y-2">
      <h2 className="font-bold text-18 text-docsGray-900">{label}</h2>
      <div className="p-4 rounded shadow-inner bg-docsGray-100">
        <div className="p-4 bg-white rounded-sm">
          <div className={sampleClassName}>{sampleContent}</div>
        </div>
      </div>
    </div>
  )
}

export let Typography = () => {
  return (
    <ContentLayout
      title="Typography"
      description={html`A list of the typographic styles used throughout the
      Hawaii Leadership Forum website.`}
      path={[
        { href: '/style-guide', label: 'Style Guide' },
        { href: '/style-guide/typography', label: 'Typography' },
      ]}
    >
      <div className="mt-8 space-y-6">
        <TypoSample
          label="Serif Heading"
          sampleContent={faker.lorem.sentence(5)}
          sampleClassName="serif-heading text-gray-25"
        />
        <TypoSample
          label="Sans All Caps Subheading"
          sampleContent={faker.lorem.sentence(3)}
          sampleClassName="sans-caps text-gray-17"
        />
        <TypoSample
          label="Sans Subheading"
          sampleContent={faker.lorem.sentence(3)}
          sampleClassName="sans-14-1_25 md:sans-16-1_25 lg:sans-18-1_25 font-bold text-gray-17"
        />
        <TypoSample
          label="Body Text"
          sampleContent={faker.lorem.paragraphs(2)}
          sampleClassName="body-text text-gray-17"
        />
        <TypoSample
          label="Large Body Text"
          sampleContent={faker.lorem.paragraphs(2)}
          sampleClassName="sans-16-1_55 md:sans-20-1_55 lg:sans-24-1_55 text-gray-38"
        />
        <TypoSample
          label="Name Text"
          sampleContent={faker.name.findName()}
          sampleClassName="person-name text-green-24"
        />
        <TypoSample
          label="Position Title Text"
          sampleContent={faker.name.jobTitle()}
          sampleClassName="person-title text-gray-17"
        />
        <TypoSample
          label="Footnote Text"
          sampleContent={faker.lorem.sentences(2)}
          sampleClassName="sans-11-1_45 md:sans-12-1_45 lg:sans-13-1_45 text-gray-51 py-px"
        />
      </div>
    </ContentLayout>
  )
}
