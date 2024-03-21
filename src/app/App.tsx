import { Link } from 'react-router-dom'
import { AppRouter } from './providers/router'

import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'

import { Navbar } from '@/widgets/Navbar'
import { Header } from '@/widgets/Header'

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Header />
      <div className={classNames('content')}>
        <Navbar />
          <button onClick={toggleTheme}>Toggle Theme</button>
        <AppRouter />
      </div>
    </div>
  )
}

export default App