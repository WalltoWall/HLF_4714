import * as React from 'react'
import * as faker from 'faker'
import html from 'ts-dedent'
import { getGatsbyImageData } from '@imgix/gatsby'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyTeam } from './PageBodyTeam'
import { titleize } from '../../lib/titleize'

export let meta: StoryMetadata = {
  title: 'Team',
  description: html`
    Large block displaying all team members. Team members are separated by their
    position types. Directors with Bio's have a popup modal.
  `,
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Team', href: '/slices/team' },
  ],
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyTeam
        directorsHeading={titleize(faker.lorem.words(3))}
        directorsSubeading={faker.lorem.words(2)}
        staffTeamHeading={titleize(faker.lorem.words(2))}
        allPersons={{
          directors: [
            {
              name: faker.name.findName(),
              gatsbyImage: getGatsbyImageData({
                src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                layout: 'fullWidth',
                aspectRatio: 1,
              }),
              bioHTML: html`
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
              `,
            },
            {
              name: faker.name.findName(),
              gatsbyImage: getGatsbyImageData({
                src: 'https://images.unsplash.com/photo-1498960660837-21234c68fbaf',
                layout: 'fullWidth',
                aspectRatio: 1,
              }),
              bioHTML: html`
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
              `,
            },
            {
              name: faker.name.findName(),
              gatsbyImage: getGatsbyImageData({
                src: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
                layout: 'fullWidth',
                aspectRatio: 1,
              }),
              bioHTML: html`
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
              `,
            },
            {
              name: faker.name.findName(),
              gatsbyImage: getGatsbyImageData({
                src: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92',
                layout: 'fullWidth',
                aspectRatio: 1,
              }),
              bioHTML: html`
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
              `,
            },
            {
              name: faker.name.findName(),
              gatsbyImage: getGatsbyImageData({
                src: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
                layout: 'fullWidth',
                aspectRatio: 1,
              }),
              bioHTML: html`
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
              `,
            },
            {
              name: faker.name.findName(),
              gatsbyImage: getGatsbyImageData({
                src: 'https://images.unsplash.com/photo-1597471897992-154dc358facf',
                layout: 'fullWidth',
                aspectRatio: 1,
              }),
              bioHTML: html`
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
                <p>${faker.lorem.paragraph()}</p>
              `,
            },
          ],
          staffTeam: [
            {
              name: faker.name.findName(),
              title: faker.name.jobTitle(),
              bioUrl: '#',
            },
            {
              name: faker.name.findName(),
              title: faker.name.jobTitle(),
              bioUrl: '#',
            },
            {
              name: faker.name.findName(),
              title: faker.name.jobTitle(),
              bioUrl: '#',
            },
            {
              name: faker.name.findName(),
              title: faker.name.jobTitle(),
              bioUrl: '#',
            },
            {
              name: faker.name.findName(),
              title: faker.name.jobTitle(),
              bioUrl: '#',
            },
            {
              name: faker.name.findName(),
              title: faker.name.jobTitle(),
              bioUrl: '#',
            },
          ],
        }}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}
