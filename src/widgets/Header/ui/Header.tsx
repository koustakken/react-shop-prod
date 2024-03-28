import { classNames } from '@/shared/lib/classNames/classNames'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'

import styles from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={classNames(styles.root, {}, [className])}>
      <div className={styles.logo}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>Weight</p>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <span>Hub</span>
      </div>
      <div className={styles.right}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
