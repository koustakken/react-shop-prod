import { RouteProps } from 'react-router-dom'

import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { WelcomePage } from '@/pages/WelcomePage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  WELCOME = 'welcome',
  // SETTINGS = 'settings',
  // WARMUP = 'warmup',
  // TRAIN = 'training',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.WELCOME]: '/',
  // [AppRoutes.SETTINGS]: '/settings',
  // [AppRoutes.WARMUP]: '/warmup',
  // [AppRoutes.TRAIN]: '/train',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.WELCOME]: {
    path: RoutePath.welcome,
    element: <WelcomePage />
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
