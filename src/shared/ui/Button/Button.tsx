import React, { FC, ButtonHTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  EDIT = 'edit',
  SUBMIT = 'submit',
  CANCEL = 'cancel'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  block?: boolean
  disabled?: boolean
}

export const Button: FC<ButtonProps & React.PropsWithChildren> = (
  props: ButtonProps
) => {
  const {
    className,
    children,
    theme,
    block,
    disabled,
    ...otherProps } = props
  const mods: Record<string, boolean> = {
    [styles.block]: block,
    [styles.disabled]: disabled
  }
  return (
    <button
      className={classNames(styles.button, mods, [className, styles[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}
