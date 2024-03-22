import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink: React.FC<AppLinkProps & React.PropsWithChildren> = (
  props
) => {
  const { className, children, to, ...otherProps } = props
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
