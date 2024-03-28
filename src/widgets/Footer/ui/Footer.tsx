import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Footer.module.scss'
export const Footer = () => {
  return (
    <footer className={classNames(styles.footer)}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <p>made by @kous.takken with ❤️</p>
    </footer>
  )
}
