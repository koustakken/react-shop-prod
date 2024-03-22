import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation()
  const langHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <select
      onChange={langHandler}
      className={classNames(styles.root, {}, [className])}
      defaultValue="en"
    >
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  )
}
