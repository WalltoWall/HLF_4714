import * as React from 'react'

import * as styles from './FieldsTable.module.css'

type FieldsTableProps = {
	children: React.ReactNode
}

export const FieldsTable = ({ children }: FieldsTableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th style={{ width: '25%' }}>Prismic Field</th>
					<th>Description</th>
					<th style={{ width: '15%' }}>Required?</th>
				</tr>
			</thead>
			<tbody className={styles.tableBody}>{children}</tbody>
		</table>
	)
}

export type FieldsTableRowProps = {
	name: string
	type: string
	description?: string
	isRequired: boolean
}

FieldsTable.Row = ({
	name,
	type,
	description,
	isRequired,
}: FieldsTableRowProps) => (
	<tr>
		<td>
			<strong>{name}</strong>
			<span
				style={{ color: 'gray', fontSize: '11px', marginLeft: '12px' }}
			>
				{type}
			</span>
		</td>
		<td>{description ?? <span style={{ color: 'gray' }}>None</span>}</td>
		<td>
			{isRequired ? (
				<span>
					✅ <strong style={{ marginLeft: '6px' }}>Required</strong>
				</span>
			) : (
				<span style={{ color: 'gray' }}>Optional</span>
			)}
		</td>
	</tr>
)

//@ts-ignore
FieldsTable.Row.displayName = 'Row'
