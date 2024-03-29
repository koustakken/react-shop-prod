import { classNames } from '@/shared/lib/classNames/classNames'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'

import styles from './Header.module.scss'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import Hamburger from '@/shared/assets/icons/hamburger.svg'
import { useSidebar } from '@/app/providers/SidebarProvider'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { toggleSidebar } = useSidebar()
  return (
    <div className={classNames(styles.root, {}, [className])}>
      <div className={styles.logo}>
        <Button theme={ThemeButton.OUTLINED} onClick={toggleSidebar} block>
          <Hamburger />
        </Button>
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
