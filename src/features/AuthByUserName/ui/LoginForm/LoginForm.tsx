import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider'
import { getLoginUsername } from '@/features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '@/features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '@/features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '@/features/AuthByUserName/model/selectors/getLoginError/getLoginError'

interface LoginFormProps {
  className?: string
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  useEffect(()=> {
    // при монтировании компонента подгружаем редьюсер
    store.reducerManager.add('loginForm', loginReducer)
    // при размонтировании удаляем
    return () => {
      store.reducerManager.remove('loginForm')
    }
  }, [])

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
  )
})

export default LoginForm