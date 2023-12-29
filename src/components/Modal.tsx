import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from 'body-scroll-lock'

export interface ModalProps {
	isOpen: boolean
	closeModal: () => void
	children?: React.ReactNode
	className?: string
}

/**
 * Base component for a modal. MUST render a button that is focusable that
 * closes the modal. Will throw otherwise.
 */
export const Modal = ({
	isOpen,
	closeModal,
	children,
	className = 'bg-white',
}: ModalProps) => {
	let ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (!ref.current) return clearAllBodyScrollLocks()

		if (isOpen) disableBodyScroll(ref.current)
		else enableBodyScroll(ref.current)
	}, [isOpen])

	return (
		<Transition.Root show={isOpen} as={React.Fragment}>
			<Dialog
				as="div"
				static
				className="fixed inset-0 z-10 overflow-y-auto"
				open={isOpen}
				onClose={closeModal}
			>
				<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center md:block md:p-0">
					<Transition.Child
						as={React.Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-80" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden md:inline-block md:align-middle md:h-screen"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<Transition.Child
						as={React.Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
						enterTo="opacity-100 translate-y-0 md:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 md:scale-100"
						leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
					>
						<div
							ref={ref}
							className={clsx(
								'inline-block overflow-hidden text-left align-bottom relative',
								'transition transform rounded-lg shadow-xl',
								'md:my-8 md:align-middle',
								className,
							)}
						>
							<div>{children}</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
