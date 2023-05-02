import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Props = {
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'default' | 'success' | 'danger',
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({ children, color = 'primary',
  disabled, onClick, size = 'lg', variant = 'contained', className }: PropsWithChildren<Props>) {
  const classNames = clsx(`btn btn-${variant} btn-${color} btn-${size}`, {
    'btn-disabled': disabled
  }, className);
  return (
    <button className={classNames} onClick={onClick}>{children}</button>
  )
}