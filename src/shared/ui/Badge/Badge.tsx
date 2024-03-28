import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Badge.module.scss'
import { FC, PropsWithChildren } from 'react'

export enum ThemeBadge {
  CLEAR = 'clear',
  HARD = 'hard',
  MEDIUM = 'medium',
  LIGHT = 'light'
}

interface BadgeProps {
  className?: string
  theme?: ThemeBadge
}

export const Badge: FC<BadgeProps & PropsWithChildren> = (props) => {
  const { className, theme, children } = props
  return (
    <div className={classNames(styles.root, {}, [className, styles[theme]])}>
      {children}
    </div>
  )
}
