import * as React from 'react'
import clsx from 'clsx'
import {
	GatsbyImage,
	type IGatsbyImageData,
	getImage,
} from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { BoundedBox } from '../../components/BoundedBox'
import {
	personName,
	personTitle,
	sansCaps,
	serifHeading,
} from '../../typography'
import { focusRing } from '../../lib/utilStyles'
import { DirectorModal } from './DirectorModal'
import { Oval } from '../../components/Oval'
import { ConditionalWrap } from '../../components/ConditionalWrap'
import { Link } from '../../components/Link'
import { type SliceComponentProps } from '@prismicio/react'
import type { SliceContext } from '../../components/SliceRenderer'

interface DirectorProps extends Pick<TPerson, 'gatsbyImage' | 'name'> {
	openModal: () => void
}

const Director = ({ gatsbyImage, name, openModal }: DirectorProps) => {
	return (
		<li>
			<button
				onClick={openModal}
				className={clsx(
					'flex flex-col items-center group',
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
					<p
						className={clsx(
							personName,
							'text-center text-green-24 pb-1 mt-4',
						)}
					>
						{name}
					</p>
				)}
			</button>
		</li>
	)
}

interface DirectorsListProps {
	directors: TPerson[]
	subheading?: string | null
	heading?: string | null
}

const Directors = ({ directors, subheading, heading }: DirectorsListProps) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false)
	const [activePerson, setActivePerson] = React.useState<
		TPerson | undefined
	>()

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

			<div className="space-y-8 md:space-y-12 lg:space-y-16">
				<div className="space-y-6">
					{subheading && (
						<h4
							className={clsx(
								sansCaps,
								'text-gray-17 text-center',
							)}
						>
							{subheading}
						</h4>
					)}

					{heading && (
						<h2
							className={clsx(
								serifHeading,
								'text-gray-25 text-center',
							)}
						>
							{heading}
						</h2>
					)}
				</div>

				<ul
					className={clsx(
						'flex justify-center flex-wrap',
						'gap-5 md:gap-x-6',
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
						<span className="sr-only">
							Read {name}'s biography.
						</span>
						{children}
					</Link>
				)}
			>
				<>
					{name && (
						<p className={clsx(personName, 'text-green-24')}>
							{name}
						</p>
					)}
					{title && (
						<p className={clsx(personTitle, 'text-gray-17 mt-3')}>
							{title}
						</p>
					)}
				</>
			</ConditionalWrap>
		</li>
	)
}

interface StaffTeamProps {
	staffTeam: TPerson[]
	heading?: string | null
}

const StaffTeam = ({ staffTeam, heading }: StaffTeamProps) => {
	return (
		<div className="space-y-8 md:space-y-12 lg:space-y-16">
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

type Slice = Queries.TeamFragment & { slice_type: 'team' }
type Props = SliceComponentProps<Slice, SliceContext>

const Team = ({ slice, context }: Props) => {
	let allPrismicPerson: Queries.AllPersonsFragment['allPrismicPerson'] =
		context?.allPersons

	let directors: TPerson[] = []
	let staffTeam: TPerson[] = []

	allPrismicPerson.nodes.forEach((node) => {
		const person: TPerson = {
			name: `${node.data?.first_name?.text} ${node.data?.last_name?.text}`,
			positionType: node.data?.position_type,
			title: node.data?.title?.text,
			gatsbyImage: getImage(node.data?.headshot),
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

	const directorsSubeading = slice.primary?.directors_subheading?.text
	const directorsHeading = slice.primary?.directors_heading?.text
	const staffTeamHeading = slice.primary?.staff_team_heading?.text

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

interface TPerson {
	name?: string | null
	positionType?: string | null
	title?: string | null
	gatsbyImage?: IGatsbyImageData
	bioHTML?: string | null
	bioUrl?: string | null
}

export default Team

export const fragment = graphql`
	fragment Team on PrismicPageDataBodyTeam {
		id
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

	fragment AllPersons on Query {
		allPrismicPerson(sort: { data: { last_name: { text: ASC } } }) {
			nodes {
				_previewable
				prismicId
				data {
					first_name {
						text
					}
					last_name {
						text
					}
					position_type
					title {
						text
					}
					headshot {
						gatsbyImageData(width: 400, placeholder: BLURRED)
					}
					bio {
						html
					}
					bio_link {
						url
					}
				}
			}
		}
	}
`
