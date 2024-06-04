import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './WelcomePage.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.root)}>
      <h1>{t('Welcome Page')}</h1>
      <span>
        {t(
          'WeightHub - training organization, planning and progression and results analysis'
        )}
      </span>
      <div className={styles.btns}>
        <div className={styles.sign}>
          <Button theme={ThemeButton.SUBMIT}>
            <Link to={'/auth'}>{t('Sign In')}</Link>
          </Button>
          <Button theme={ThemeButton.EDIT}>{t('Sign Up')}</Button>
        </div>
        <Button theme={ThemeButton.OUTLINED}>{t('GitHub')}</Button>
      </div>
    </div>
  )
}

export default WelcomePage
