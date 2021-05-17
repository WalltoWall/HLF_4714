import * as React from 'react'
import clsx from 'clsx'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Dialog } from '@headlessui/react'

import { HTMLContent } from '../../components/HTMLContent'
import { Modal, ModalProps } from '../../components/Modal'
import { focusRing } from '../../lib/utilStyles'
import { sansCaps } from '../../typography'
import { Close } from '../../components/icons/Close'

import patternUrl from '../../assets/pattern.jpg'
import * as styles from './DirectorModal.module.css'

interface Props extends Omit<ModalProps, 'children' | 'title'> {
  bioHTML?: string
  imageFluid?: FluidObject
  name?: string
}

export const DirectorModal = ({
  isOpen,
  closeModal,
  name,
  bioHTML,
  imageFluid,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className="bg-green-92 md:max-w-xl md:w-full"
    >
      <div className="relative px-5 py-7 md:p-8">
        <img
          src={patternUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className={clsx(
            'absolute right-0 inset-y-0 w-[95px] md:w-[135px] pointer-events-none',
            'object-cover h-full',
          )}
        />

        <div className="isolate">
          <div
            className={clsx(
              styles.avatar,
              'float-right rounded-full bg-gray-87 ml-3 mb-3 md:ml-5 overflow-hidden',
              'h-[100px] md:h-28 lg:h-[130px]',
              'w-[100px] md:w-28 lg:w-[130px]',
            )}
          >
            {imageFluid && (
              <GatsbyImage
                fluid={imageFluid}
                alt={name}
                imgStyle={{ objectFit: 'cover' }}
              />
            )}
          </div>

          <div className="space-y-5 md:space-y-6">
            {name && (
              <Dialog.Title
                as="h4"
                className="font-bold text-green-24 sans-20-1_25"
              >
                {name}
              </Dialog.Title>
            )}

            {bioHTML && <HTMLContent variant="textWithImage" html={bioHTML} />}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'flex justify-end border-t-2 border-gray-87',
          'px-5 py-4 md:px-8',
        )}
      >
        <button
          type="button"
          onClick={closeModal}
          className={clsx('flex items-center space-x-2', focusRing)}
        >
          <div className={clsx(sansCaps, 'text-green-24')}>Close</div>

          <Close className="w-3 h-3" />
        </button>
      </div>
    </Modal>
  )
}
