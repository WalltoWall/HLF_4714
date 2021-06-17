import * as React from 'react'
import * as faker from 'faker'
import html from 'ts-dedent'
import { getGatsbyImageData } from '@imgix/gatsby'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'
import { PageContainer } from 'gatsby-site/src/components/PageContainer'
import { default as PageBodyTeam } from 'gatsby-site/src/slices/PageBodyTeam/PageBodyTeam'

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
              <strong>Directors Subheading</strong> <small>Rich Text</small>
            </td>
            <td>
              Small caps heading above all <strong>Director</strong>{' '}
              <Link to="/types/person">Persons</Link> documents
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Directors Heading</strong> <small>Rich Text</small>
            </td>
            <td>
              Serif heading above all <strong>Director</strong>{' '}
              <Link to="/types/person">Persons</Link> documents
            </td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Staff Team Heading</strong> <small>Rich Text</small>
            </td>
            <td>
              Serif heading above all <strong>Staff Team</strong>{' '}
              <Link to="/types/person">Persons</Link> documents
            </td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyTeam
        directorsHeading={faker.lorem.sentence(3)}
        directorsSubeading={faker.lorem.words(2)}
        staffTeamHeading={faker.lorem.sentence(2)}
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
