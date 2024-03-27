import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div className="main-page-wrapper">
      <div>
        <h1>{t('Activity')}</h1>
      </div>
      <div>
        <h1>{t('Training History')}</h1>
      </div>
    </div>
  )
}

export default MainPage
