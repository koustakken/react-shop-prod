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
}

export const Button: FC<ButtonProps & React.PropsWithChildren> = (
  props: ButtonProps
) => {
  const { className, children, theme, ...otherProps } = props
  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
