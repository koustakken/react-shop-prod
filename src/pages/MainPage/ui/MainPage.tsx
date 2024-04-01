import { useTranslation } from 'react-i18next'
import ActivityCalendar from 'react-activity-calendar'
import { Card } from '@/shared/ui/Card/Card'
import styles from './MainPage.module.scss'
import { LineGraph } from '@/widgets/LineGraph'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Input } from '@/shared/ui/Input/Input'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from '@/entities/Profile'

const reducers: ReducerList = {
  profile: profileReducer
}
const MainPage = () => {
  const { t } = useTranslation()
  const data = [
    {
      date: '2024-03-27',
      count: 0,
      level: 0
    },
    {
      date: '2024-03-26',
      count: 1,
      level: 1
    },
    {
      date: '2024-01-25',
      count: 1,
      level: 1
    },
    {
      date: '2024-03-24',
      count: 1,
      level: 1
    },
    {
      date: '2023-02-11',
      count: 1,
      level: 1
    }
  ]
  const history = [
    {
      id: 1,
      title: 'Bench Press',
      type: 'light',
      description: 'First train after sickness',
      plan: 'SCC 4'
    },
    {
      id: 2,
      title: 'Bench Press',
      type: 'light',
      description: '',
      plan: 'SCC 4'
    },
    {
      id: 3,
      title: 'Bench Press',
      type: 'light',
      description: 'Three train after sickness',
      plan: 'SCC 4'
    },
    {
      id: 4,
      title: 'Bench Press',
      type: 'middle',
      description: '',
      plan: 'SCC 4'
    },
    {
      id: 5,
      title: 'Bench Press',
      type: 'hard',
      description: 'Filling good',
      plan: 'SCC 4'
    }
  ]
  const progressHistory = [
    {
      name: '2024/03/24',
      value: 50
    },
    {
      name: '2024/03/25',
      value: 60
    },
    {
      name: '2024/03/26',
      value: 70
    },
    {
      name: '2024/03/27',
      value: 65
    },
    {
      name: '2024/03/28',
      value: 80
    }
  ]
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
          <Navbar />
        </div>
        <div className="main-page-wrapper">
          <h1>{t('Activity')}</h1>
          <div className={styles.activity}>
            <ActivityCalendar
              data={data}
              theme={{
                light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
                dark: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259']
              }}
              hideColorLegend={true}
              blockSize={15}
              blockRadius={4}
              showWeekdayLabels={true}
              weekStart={1}
            />
          </div>
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionProgress}>
              <h1>{t('Progress')}</h1>
              <LineGraph data={progressHistory} />
            </div>
            <div className={styles.sectionHistory}>
              <div className={styles.sectionHistoryInfo}>
                <h1>{t('History')}</h1>
                <div className={styles.sectionHistoryEvents}>
                  <Button theme={ThemeButton.OUTLINED}>{t('Filter')}</Button>
                  <Input placeholder={'Search'}/>
                </div>
              </div>
              {history.map((train) => (
                <Card
                  key={train.id}
                  title={train.title}
                  type={train.type}
                  plan={train.plan}
                  description={train.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DynamicModuleLoader>
  )
}

export default MainPage
