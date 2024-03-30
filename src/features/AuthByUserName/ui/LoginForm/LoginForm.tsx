import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

interface LoginFormProps {

}

export const LoginForm = (props: LoginFormProps) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(styles.root, {}, [])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>{t('Authorization')}</h1>
      <div className={styles.inputs}>
        <Input placeholder={'Username'} />
        <Input placeholder={'Password'} type={'password'} />
      </div>
      <div className={styles.btns}>
        <Button theme={ThemeButton.EDIT}>{t('Login')}</Button>
        <Button theme={ThemeButton.SUBMIT}>{t('Register')}</Button>
      </div>
      <p>{t('Forgot password? 🤷‍♂️')}</p>
    </div>
  )
}