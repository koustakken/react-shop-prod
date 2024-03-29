import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import { classNames } from '@/shared/lib/classNames/classNames'

import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <div className={classNames('content')}>
          <AppRouter />
        </div>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
