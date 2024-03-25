import { FC, PropsWithChildren } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = (
  props: AppLinkProps
) => {
  const {
    className,
    children,
    to,
    ...otherProps
  } = props
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
