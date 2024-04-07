import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import styles from './LoginForm.module.scss'
import { getLoginUsername } from '@/features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '@/features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '@/features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '@/features/AuthByUserName/model/selectors/getLoginError/getLoginError'

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  loginForm: loginReducer
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    // @ts-ignore
    await dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
          {error && <span>{t('Invalid username or password')}</span>}
        </div>
        <div className={styles.btns}>
          <Button
            theme={ThemeButton.EDIT}
            onClick={onLoginClick}
            disabled={isLoading}
          >
            {t('Login')}
          </Button>
          <Button theme={ThemeButton.SUBMIT}>{t('Register')}</Button>
        </div>
        <p>{t('Forgot password? 🤷‍♂️')}</p>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm