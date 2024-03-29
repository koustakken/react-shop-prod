import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import Sad from '@/shared/assets/icons/sad.svg'

import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.root, {}, [className])}>
      {t('PAGE NOT FOUND')}
      <Sad />
    </div>
  )
}
