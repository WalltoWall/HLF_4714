import * as React from 'react'
import clsx from 'clsx'
import GatsbyImage from 'gatsby-image'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { useAllPersons, TPerson } from '../../hooks/useAllPersons'
import {
  personName,
  personTitle,
  sansCaps,
  serifHeading,
} from '../../typography'
import { HStack } from '../../components/HStack'
import { graphql } from 'gatsby'
import { PageBodyTeamFragment } from '../../types.generated'

const Director = ({
  imageFluid,
  name,
}: Pick<TPerson, 'imageFluid' | 'name'>) => {
  return (
    <li className="flex flex-col items-center space-y-4 w-[90px] md:w-28 lg:w-[130px]">
      <div className="w-full h-[90px] md:h-28 lg:h-[130px] rounded-full bg-gray-87">
        {imageFluid && (
          <GatsbyImage
            fluid={imageFluid}
            alt={name}
            imgStyle={{ objectFit: 'cover' }}
          />
        )}
      </div>

      {name && (
        <p className={clsx(personName, 'text-center text-green-24')}>{name}</p>
      )}
    </li>
  )
}

interface DirectorsListProps {
  directors: TPerson[]
  subheading?: string
  heading?: string
}

const Directors = ({ directors, subheading, heading }: DirectorsListProps) => {
  return (
    <div className="space-y-6 md:space-y-10 lg:space-y-14">
      <div className="space-y-6">
        {subheading && (
          <h4 className={clsx(sansCaps, 'text-gray-17 text-center')}>
            {subheading}
          </h4>
        )}
        {heading && (
          <h2 className={clsx(serifHeading, 'text-gray-25 text-center')}>
            {heading}
          </h2>
        )}
      </div>

      <HStack
        as="ul"
        rowGap="20px"
        columnGap="20px"
        mdRowGap="24px"
        className="justify-center"
      >
        {directors.map((director, idx) => (
          <Director key={idx} {...director} />
        ))}
      </HStack>
    </div>
  )
}

const Member = ({ name, title }: Pick<TPerson, 'name' | 'title'>) => {
  return (
    <li className="space-y-3 text-center">
      {name && <p className={clsx(personName, 'text-green-24')}>{name}</p>}
      {title && <p className={clsx(personTitle, 'text-gray-17')}>{title}</p>}
    </li>
  )
}

interface StaffTeamProps {
  staffTeam: TPerson[]
  heading?: string
}

const StaffTeam = ({ staffTeam, heading }: StaffTeamProps) => {
  return (
    <div className="space-y-6 md:space-y-10 lg:space-y-14">
      {heading && (
        <h2 className={clsx(serifHeading, 'text-gray-25 text-center')}>
          {heading}
        </h2>
      )}

      <ul
        className={clsx(
          'grid grid-cols-2 gap-y-8 gap-x-6',
          'md:grid-cols-3 md:gap-x-8 md:gap-y-10',
          'lg:gap-x-10',
        )}
      >
        {staffTeam.map((member, idx) => (
          <Member key={idx} {...member} />
        ))}
      </ul>
    </div>
  )
}

export type PageBodyTeamProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

// TODO: Modals & Heading fields
const PageBodyTeam = ({
  staffTeamHeading,
  directorsHeading,
  directorsSubeading,
}: PageBodyTeamProps) => {
  const { directors, staffTeam } = useAllPersons()

  return (
    <BoundedBox
      as="section"
      data-page-team
      className={clsx('relative bg-green-92', 'py-10 lg:py-20')}
    >
      <div className="space-y-9 md:space-y-16">
        <Directors
          directors={directors}
          heading={directorsHeading}
          subheading={directorsSubeading}
        />
        <hr className="w-full border-t border-gray-87" />
        <StaffTeam staffTeam={staffTeam} heading={staffTeamHeading} />
      </div>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyTeamFragment, typeof mapDataToContext>) => ({
  directorsSubeading: data.primary?.directors_subheading?.text,
  directorsHeading: data.primary?.directors_heading?.text,
  staffTeamHeading: data.primary?.staff_team_heading?.text,
})

export const mapDataToContext = () => ({
  bg: 'bg-green-92',
})

export const fragment = graphql`
  fragment PageBodyTeam on PrismicPageBodyTeam {
    primary {
      directors_subheading {
        text
      }
      directors_heading {
        text
      }
      staff_team_heading {
        text
      }
    }
  }
`

export default PageBodyTeam
