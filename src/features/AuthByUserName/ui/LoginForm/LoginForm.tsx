import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {username, password} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>{t('Authorization')}</h1>
      <div className={styles.inputs}>
        <Input
          placeholder={'Username'}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          onChange={onChangePassword}
          value={password}
        />
      </div>
      <div className={styles.btns}>
        <Button
          theme={ThemeButton.EDIT}
          onClick={onLoginClick}
        >
          {t('Login')}
        </Button>
        <Button theme={ThemeButton.SUBMIT}>{t('Register')}</Button>
      </div>
      <p>{t('Forgot password? 🤷‍♂️')}</p>
    </div>
  )
})