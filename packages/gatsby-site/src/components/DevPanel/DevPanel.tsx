import React from 'react'

import { RefreshIcon } from './RefreshIcon'
import { EditIcon } from './EditIcon'
import { GraphQLIcon } from './GraphQLIcon'
import { HelpIcon } from './HelpIcon'

import * as styles from './DevPanel.module.css'

const refreshData = () => fetch('/__refresh', { method: 'post' })
const openAdmin = () => window.open('/admin')
const openDocs = () => window.open('/docs')
const openGraphiQL = () => window.open('/__graphql')

type DevButtonProps = {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  onClick: () => void
  isActive?: boolean
  title: string
}

const DevButton = ({ onClick, title, icon: IconSVG }: DevButtonProps) => {
  return (
    <button
      tabIndex={-1}
      onClick={onClick}
      title={title}
      className={styles.button}
    >
      <IconSVG className={styles.icon} />
    </button>
  )
}

export const DevPanel = () => {
  return (
    <div className={styles.panel}>
      <DevButton onClick={openAdmin} icon={EditIcon} title="Open admin" />
      <DevButton
        onClick={openGraphiQL}
        icon={GraphQLIcon}
        title="Open GraphiQL"
      />
      <DevButton onClick={openDocs} icon={HelpIcon} title="Open docs" />
      <DevButton
        onClick={refreshData}
        icon={RefreshIcon}
        title="Refresh data"
      />
    </div>
  )
}
