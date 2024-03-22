import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import { classNames } from '@/shared/lib/classNames/classNames'

import { Navbar } from '@/widgets/Navbar'
import { Header } from '@/widgets/Header'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <div className={classNames('content')}>
          <Navbar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
