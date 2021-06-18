import * as React from 'react'
import clsx from 'clsx'
import html from 'ts-dedent'
import { Popover } from '@headlessui/react'

import { ContentLayout } from '../components/ContentLayout'

interface Color {
  bgClassName: string
  label: string
  hex: string
}

interface SwatchProps {
  color: Color
}

let Swatch = ({ color }: SwatchProps) => {
  return (
    <Popover className="relative">
      <Popover.Button
        className={clsx(
          'rounded-full w-14 h-14 block',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          color.bgClassName,
        )}
      />

      <Popover.Panel
        className={clsx(
          'absolute z-10 px-5 py-3 bg-white rounded-lg shadow-md left-[50%]',
          'transform translate-x-[-50%]',
          'text-center space-y-1.5',
        )}
      >
        <p className="font-semibold text-14 text-docsGray-900 leading-1 whitespace-nowrap">
          {color.label}
        </p>
        <p className="font-medium leading-1 text-14 text-docsGray-500">
          {color.hex}
        </p>
      </Popover.Panel>
    </Popover>
  )
}

interface ColorGroupProps {
  label: string
  colors: Color[]
}

let ColorGroup = ({ label, colors }: ColorGroupProps) => {
  return (
    <div className="space-y-1">
      <h2 className="font-bold text-24 text-docsGray-900">{label}</h2>
      <div className="flex space-x-8">
        {colors.map((c) => (
          <Swatch key={c.hex} color={c} />
        ))}
      </div>
    </div>
  )
}

export let Colors = () => {
  return (
    <ContentLayout
      title="Colors"
      description={html`A list of the colors used throughout the Hawaii
      Leadership Forum website. Click on any swatch for additional details about
      a color.`}
      path={[
        { href: '/style-guide', label: 'Style Guide' },
        { href: '/style-guide/colors', label: 'Colors' },
      ]}
    >
      <div className="mt-8 space-y-6">
        <ColorGroup
          label="Yellow"
          colors={[
            { bgClassName: 'bg-yellow-59', label: 'Yellow 59', hex: '#f9ed32' },
          ]}
        />
        <ColorGroup
          label="Teal"
          colors={[
            { bgClassName: 'bg-teal-45', label: 'Teal 45', hex: '#3fa896' },
          ]}
        />
        <ColorGroup
          label="Blue"
          colors={[
            { bgClassName: 'bg-blue-36', label: 'Blue 36', hex: '#0090b8' },
          ]}
        />
        <ColorGroup
          label="Gray"
          colors={[
            { bgClassName: 'bg-gray-17', label: 'Gray 17', hex: '#2b2b2b' },
            { bgClassName: 'bg-gray-25', label: 'Gray 25', hex: '#3f3f3f' },
            { bgClassName: 'bg-gray-38', label: 'Gray 38', hex: '#616161' },
            { bgClassName: 'bg-gray-51', label: 'Gray 51', hex: '#808285' },
            { bgClassName: 'bg-gray-87', label: 'Gray 87', hex: '#dedede' },
          ]}
        />
        <ColorGroup
          label="Green"
          colors={[
            { bgClassName: 'bg-green-24', label: 'Green 24', hex: '#087050' },
            { bgClassName: 'bg-green-92', label: 'Green 92', hex: '#e8f5e2' },
          ]}
        />
      </div>
    </ContentLayout>
  )
}
