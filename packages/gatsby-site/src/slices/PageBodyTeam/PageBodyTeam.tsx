import * as React from 'react'
import clsx from 'clsx'
import {
  GatsbyImage,
  IGatsbyImageData,
  getImage,
  ImageDataLike,
} from 'gatsby-plugin-image'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import {
  personName,
  personTitle,
  sansCaps,
  serifHeading,
} from '../../typography'
import type {
  PageBodyTeamFragment,
  AllPersonsFragment,
} from '../../types.generated'
import { focusRing } from '../../lib/utilStyles'
import { DirectorModal } from './DirectorModal'
import { Oval } from '../../components/Oval'
import { ConditionalWrap } from '../../components/ConditionalWrap'
import { Link } from '../../components/Link'

interface DirectorProps extends Pick<TPerson, 'gatsbyImage' | 'name'> {
  openModal: () => void
}

const Director = ({ gatsbyImage, name, openModal }: DirectorProps) => {
  return (
    <li>
      <button
        onClick={openModal}
        className={clsx(
          'flex flex-col items-center space-y-4 group',
          'w-[90px] sm:w-28 md:w-32 lg:w-[130px]',
          focusRing,
          'focus:ring-offset-2 focus:ring-offset-green-92',
        )}
      >
        <span className="sr-only">Open {name}'s biography.</span>

        <div className="flex-shrink-0 rounded-full bg-gray-87">
          {gatsbyImage && (
            <GatsbyImage
              image={gatsbyImage}
              alt={name ?? ''}
              imgStyle={{ objectFit: 'cover' }}
              className={clsx(
                'transition filter grayscale group-hover:grayscale-0',
                'group-focus-within:grayscale-0 rounded-full',
                'h-[90px] sm:h-28 md:h-32 lg:h-[130px]',
                'w-[90px] sm:w-28 md:w-32 lg:w-[130px]',
              )}
            />
          )}
        </div>

        {name && (
          <p className={clsx(personName, 'text-center text-green-24 pb-1')}>
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
        gatsbyImage={activePerson?.gatsbyImage}
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

        <ul
          className={clsx(
            'grid justify-center grid-cols-[repeat(3,auto)] gap-5 justify-items-center',
            'md:gap-x-6 lg:grid-cols-6',
          )}
        >
          {directors.map((director, idx) => (
            <Director
              key={idx}
              openModal={() => openModal(director)}
              {...director}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

const Member = ({
  name,
  title,
  bioUrl,
}: Pick<TPerson, 'name' | 'title' | 'bioUrl'>) => {
  return (
    <li className="text-center">
      <ConditionalWrap
        condition={Boolean(bioUrl)}
        wrap={(children) => (
          <Link
            href={bioUrl!}
            className={clsx(
              'block',
              'focus:ring-offset-2 focus:ring-offset-green-92',
            )}
          >
            <span className="sr-only">Read {name}'s biography.</span>
            {children}
          </Link>
        )}
      >
        <>
          {name && <p className={clsx(personName, 'text-green-24')}>{name}</p>}
          {title && (
            <p className={clsx(personTitle, 'text-gray-17 mt-3')}>{title}</p>
          )}
        </>
      </ConditionalWrap>
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
  allPersons,
}: PageBodyTeamProps) => {
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
          'absolute pointer-events-none text-green-92',
          'opacity-60',
        )}
      />
      <Oval
        variant="solidReverse"
        className={clsx('absolute pointer-events-none text-green-92')}
      />

      <div className="space-y-9 md:space-y-16 isolate">
        <Directors
          directors={allPersons.directors}
          heading={directorsHeading}
          subheading={directorsSubeading}
        />
        <hr className="w-full border-t border-gray-87" />
        <StaffTeam
          staffTeam={allPersons.staffTeam}
          heading={staffTeamHeading}
        />
      </div>
    </BoundedBox>
  )
}

interface TPerson {
  name?: string
  positionType?: string
  title?: string
  gatsbyImage?: IGatsbyImageData
  bioHTML?: string
  bioUrl?: string
}

export const mapDataToProps = ({
  data,
  meta,
}: MapDataToPropsArgs<PageBodyTeamFragment, typeof mapDataToContext>) => {
  let allPrismicPerson: AllPersonsFragment['allPrismicPerson'] =
    meta?.rootData.allPrismicPerson

  let directors: TPerson[] = []
  let staffTeam: TPerson[] = []

  allPrismicPerson.nodes.forEach((node) => {
    const person: TPerson = {
      name: `${node.data?.first_name?.text} ${node.data?.last_name?.text}`,
      positionType: node.data?.position_type,
      title: node.data?.title?.text,
      gatsbyImage: getImage(node.data?.headshot as ImageDataLike),
      bioHTML: node.data?.bio?.html,
      bioUrl: node.data?.bio_link?.url,
    }

    switch (person.positionType) {
      case 'Staff Team':
        return staffTeam.push(person)
      case 'Director':
        return directors.push(person)
      default:
        return
    }
  })

  return {
    directorsSubeading: data.primary?.directors_subheading?.text,
    directorsHeading: data.primary?.directors_heading?.text,
    staffTeamHeading: data.primary?.staff_team_heading?.text,
    allPersons: {
      directors,
      staffTeam,
    },
  }
}

export const mapDataToContext = () => ({
  bg: 'bg-green-92',
})

export default PageBodyTeam
