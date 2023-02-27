import React from 'react'

export type TChildren = {
	children?: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	className?: string
	placeholder?: string
}
