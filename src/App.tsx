import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'

import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync/>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App