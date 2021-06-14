import * as React from 'react'
import clsx from 'clsx'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
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
  imageFluid?: IGatsbyImageData
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
      <div className="relative px-5 md:px-8">
        <img
          src={patternUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className={clsx(
            'absolute right-0 inset-y-0',
            'w-[95px] md:w-[135px]',
            'pointer-events-none',
            'object-cover h-full',
          )}
        />

        <div
          className={clsx(
            'relative overflow-scroll max-h-80',
            'pt-8 md:pt-9 pb-5 md:pb-6',
            'mb-3',
            styles.hideScrollbar,
          )}
        >
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
                image={imageFluid}
                alt={name ?? ''}
                imgStyle={{ objectFit: 'cover', borderRadius: '50%' }}
                className="rounded-full"
              />
            )}
          </div>

          <div>
            {name && (
              <Dialog.Title
                as="h4"
                className="mb-5 font-bold text-green-24 sans-20-1_25 md:mb-6"
              >
                {name}
              </Dialog.Title>
            )}

            {bioHTML && <HTMLContent variant="textWithImage" html={bioHTML} />}
          </div>
        </div>

        <div
          className={clsx(
            'absolute inset-x-0 top-0 h-5 pointer-events-none max-w-full',
            'bg-gradient-to-t to-green-92 from-[#e8f5e200]',
          )}
        />

        <div
          className={clsx(
            'absolute inset-x-0 bottom-0 h-5 pointer-events-none max-w-full',
            'bg-gradient-to-b to-green-92 from-[#e8f5e200]',
          )}
        />
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
