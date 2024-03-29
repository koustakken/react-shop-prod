import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import styles from './Sidebar.module.scss'
import { State, useSidebar } from '@/app/providers/SidebarProvider'

export const Sidebar = () => {
  const { state } = useSidebar()
  const { t } = useTranslation()
  const mods = {
    [styles.collapsed]: state === State.CLOSED
  }
  return (
    <nav className={classNames(styles.root, mods, [])}>
      <div> {t('Profile')}</div>
      <div> {t('Links')}</div>
      <Button theme={ThemeButton.CANCEL}>{t('Close')}</Button>
    </nav>
  )
}
