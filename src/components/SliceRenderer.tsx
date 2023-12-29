import * as React from 'react'
import { SliceZone, type SliceZoneProps } from '@prismicio/react'
import { components } from '../slices'

export type SliceContext = {
	allPersons: Queries.AllPersonsFragment['allPrismicPerson']
}

type Props = Omit<SliceZoneProps, 'context' | 'components'> & {
	context: SliceContext
}

export const SliceRenderer = (props: Props) => {
	return <SliceZone components={components} {...props} />
}
