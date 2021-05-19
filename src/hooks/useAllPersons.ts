import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { __DEV__ } from '../constants'
import { AllPrismicPersonsQuery } from '../types.generated'

enum PositionType {
  Director = 'Director',
  StaffTeam = 'Staff Team',
}

export interface TPerson {
  name?: string
  positionType?: PositionType
  title?: string
  imageFluid?: FluidObject
  bioHTML?: string
}

export function useAllPersons() {
  const queryData = useStaticQuery<AllPrismicPersonsQuery>(graphql`
    query AllPrismicPersons {
      allPrismicPerson(sort: { fields: data___last_name___text, order: ASC }) {
        nodes {
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
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
            bio {
              html
            }
          }
        }
      }
    }
  `)

  console.log(queryData)

  // We're intentionally ignoring the useMemo dependency here since queryData
  // will never update in practice.
  return React.useMemo(
    () => {
      let directors: TPerson[] = []
      let staffTeam: TPerson[] = []

      queryData.allPrismicPerson.nodes.forEach((node) => {
        const person: TPerson = {
          name: `${node.data?.first_name?.text} ${node.data?.last_name?.text}`,
          positionType: node.data?.position_type as PositionType,
          title: node.data?.title?.text,
          imageFluid: node.data?.headshot?.fluid,
          bioHTML: node.data?.bio?.html,
        }

        switch (person.positionType) {
          case PositionType.StaffTeam:
            return staffTeam.push(person)
          case PositionType.Director:
            return directors.push(person)
          default:
            if (__DEV__) console.warn('Found invalid person: ', person)

            return
        }
      })

      return {
        directors,
        staffTeam,
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
}
