import styles from './AuthPage.module.scss'
import { LoginForm } from '@/features/AuthByUserName'

const AuthPage = () => {
  return (
    <div className={styles.root}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <LoginForm />
    </div>
  )
}

export default AuthPage