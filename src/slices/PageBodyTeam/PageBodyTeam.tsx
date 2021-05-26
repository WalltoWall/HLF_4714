import * as React from 'react'
import { graphql } from 'gatsby'
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
import { PageBodyTeamFragment } from '../../types.generated'
import { focusRing } from '../../lib/utilStyles'
import { DirectorModal } from './DirectorModal'
import { Oval } from '../../components/Oval'

interface DirectorProps extends Pick<TPerson, 'imageFluid' | 'name'> {
  openModal: () => void
}

const Director = ({ imageFluid, name, openModal }: DirectorProps) => {
  return (
    <li>
      <button
        onClick={openModal}
        className={clsx(
          'flex flex-col items-center space-y-4 w-[90px] md:w-28 lg:w-[130px]',
          'group',
          focusRing,
        )}
      >
        <span className="sr-only">Open {name}'s biography.</span>

        <div
          className={clsx(
            'w-full h-[90px] md:h-28 lg:h-[130px] rounded-full bg-gray-87',
            'flex-shrink-0',
          )}
        >
          {imageFluid && (
            <GatsbyImage
              fluid={imageFluid}
              alt={name}
              imgStyle={{ objectFit: 'cover' }}
              className={clsx(
                'transition filter grayscale group-hover:grayscale-0',
                'group-focus-within:grayscale-0 rounded-full h-full w-full',
              )}
            />
          )}
        </div>

        {name && (
          <p className={clsx(personName, 'text-center text-green-24 py-px')}>
            {name}
          </p>
        )}
      </button>
    </li>
  )
}

interface DirectorsListProps {
  directors: TPerson[]
  subheading?: string
  heading?: string
}

const Directors = ({ directors, subheading, heading }: DirectorsListProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [activePerson, setActivePerson] = React.useState<TPerson | undefined>()

  const openModal = (person: TPerson) => {
    setIsModalOpen(true)
    setActivePerson(person)
  }
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <DirectorModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        name={activePerson?.name}
        bioHTML={activePerson?.bioHTML}
        imageFluid={activePerson?.imageFluid}
      />

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
            <Director
              key={idx}
              openModal={() => openModal(director)}
              {...director}
            />
          ))}
        </HStack>
      </div>
    </>
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
      className={clsx(
        'relative overflow-hidden',
        'pt-24',
        'pb-10 container:pt-56',
      )}
    >
      <Oval
        variant="opaqueReverse"
        className={clsx(
          'absolute pointer-events-none text-green-92 z-[-1]',
          'opacity-60',
        )}
      />
      <Oval
        variant="solidReverse"
        className={clsx('absolute pointer-events-none text-green-92 z-[-1]')}
      />

      <div className="space-y-9 md:space-y-16 isolate">
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
}: MapDataToPropsArgs<PageBodyTeamFragment, typeof mapDataToContext>) => {
  return {
    directorsSubeading: data.primary?.directors_subheading?.text,
    directorsHeading: data.primary?.directors_heading?.text,
    staffTeamHeading: data.primary?.staff_team_heading?.text,
  }
}

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
