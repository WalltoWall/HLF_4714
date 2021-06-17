import * as React from 'react'
import html from 'ts-dedent'
import * as faker from 'faker'

import type { StoryMetadata } from '../../types'
import { PageContainer } from 'gatsby-site/src/components/PageContainer'
import { default as PageBodyCallToAction } from 'gatsby-site/src/slices/PageBodyCallToAction/PageBodyCallToAction'

export let meta: StoryMetadata = {
  title: 'Call to Action',
  description: 'Full width block with actionable links.',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Call to Action', href: '/slices/call-to-action' },
  ],
  content: () => (
    <>
      <h3>Fields</h3>
      <table>
        <thead>
          <tr>
            <th>Prismic Field</th>
            <th>Description</th>
            <th>Required</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <strong>Subheading</strong> <small>Rich Text</small>
            </td>
            <td>Small caps heading</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Heading</strong> <small>Rich Text</small>
            </td>
            <td>Large serif text displayed</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Text</strong> <small>Rich Text</small>
            </td>
            <td>Text displayed alongside the headings</td>
            <td>Optional</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyCallToAction
        heading={faker.lorem.sentence(2)}
        subheading={faker.company.bsAdjective()}
        textHTML={html`
          <h5>${faker.lorem.word()}</h5>
          <p>${faker.lorem.sentences(3)}</p>
          <p></p>
          <p>
            ${faker.address.streetAddress(true)}<br />
            ${faker.address.cityName()}, ${faker.address.stateAbbr()}<br />
            <a href="#">${faker.phone.phoneNumber()}</a>
          </p>
          <h5>
            <a href="#"> ${faker.internet.exampleEmail()} </a>
          </h5>
        `}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}
