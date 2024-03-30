import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './WelcomePage.module.scss'
import { useTranslation } from 'react-i18next'
const WelcomePage = () => {
  const {t} = useTranslation()
  return (
    <div className={classNames(styles.root)}>
      <h1>{t('Welcome Page')}</h1>
    </div>
  )
}

export default WelcomePage