import { classNames } from '@/shared/lib/classNames/classNames'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'

import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.root, {}, [ className ])}>
      <span>{t('React App')}</span>
      <div className={styles.right}>
        <input type='text' />
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
