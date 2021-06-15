import * as React from 'react'
import html from 'ts-dedent'
import * as faker from 'faker'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyCallToAction } from './PageBodyCallToAction'
import { titleize } from '../../lib/titleize'

export let meta: StoryMetadata = {
  title: 'Call to Action',
  description: 'Lorem ipsum sit dolor',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Call to Action', href: '/slices/call-to-action' },
  ],
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyCallToAction
        heading={titleize(faker.random.words(2))}
        subheading={faker.company.bsAdjective()}
        textHTML={html`
          <h5>${titleize(faker.company.bsNoun())}</h5>
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
