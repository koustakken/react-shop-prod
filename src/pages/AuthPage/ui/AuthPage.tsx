import { LoginFormAsync } from '@/features/AuthByUserName/ui/LoginForm/LoginForm.async'
import styles from './AuthPage.module.scss'
import { Suspense } from 'react'

const AuthPage = () => {
  return (
    <div className={styles.root}>
      <Suspense fallback={''}>
        <LoginFormAsync />
      </Suspense>
    </div>
  )
}

export default AuthPage