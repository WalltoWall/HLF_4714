import * as React from 'react'
import * as faker from 'faker'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'
import { PageContainer } from 'gatsby-site/src/components/PageContainer'
import { default as PageBodyPageIntro } from 'gatsby-site/src/slices/PageBodyPageIntro/PageBodyPageIntro'

export let meta: StoryMetadata = {
  title: 'Page Intro',
  description:
    'Large full-width block with patterned background and customizable navigation.',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Page Intro', href: '/slices/page-intro' },
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
              <strong>Heading</strong> <small>Rich Text</small>
            </td>
            <td>Large serif text displayed</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Navigation</strong> <small>Navigation</small>
            </td>
            <td>
              <Link to="/types/navigation">Navigation</Link> to use
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
      <PageBodyPageIntro
        heading={faker.lorem.sentence(3)}
        navItems={[
          { href: '#', label: faker.company.bsNoun() },
          { href: '#', label: faker.company.bsNoun() },
          { href: '#', label: faker.company.bsNoun() },
          { href: '#', label: faker.company.bsNoun() },
        ]}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}
