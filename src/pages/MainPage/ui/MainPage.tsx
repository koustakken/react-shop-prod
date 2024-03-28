import { useTranslation } from 'react-i18next'
import ActivityCalendar from 'react-activity-calendar'
import { Card } from '@/shared/ui/Card/Card'
import styles from './MainPage.module.scss'

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
      plan: 'SCC 4'
    },
    {
      id: 2,
      title: 'Bench Press',
      type: 'light',
      plan: 'SCC 4'
    },
    {
      id: 3,
      title: 'Bench Press',
      type: 'light',
      plan: 'SCC 4'
    },
    {
      id: 4,
      title: 'Bench Press',
      type: 'light',
      plan: 'SCC 4'
    },
    {
      id: 5,
      title: 'Bench Press',
      type: 'light',
      plan: 'SCC 4'
    }
  ]
  {
    /*const records = [*/
  }
  {
    /*  {*/
  }
  {
    /*    name: 'Bench Press',*/
  }
  {
    /*    value: '140 kg',*/
  }
  {
    /*    year: '2023'*/
  }
  //   },
  //   {
  //     name: 'Squat',
  {
    /*    value: '150 kg',*/
  }
  //     year: '2023'
  //   },
  //   {
  //     name: 'Deadlift',
  //     value: '150 kg',
  //     year: '2023'
  //   }
  // ]
  return (
    <div className="main-page-wrapper">
      <h1>{t('Activity')}</h1>
      <div className={styles.activity}>
        <ActivityCalendar
          data={data}
          theme={{
            light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259']
          }}
          hideColorLegend={true}
          blockSize={15}
          blockRadius={4}
          showWeekdayLabels={true}
          weekStart={1}
        />
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h1>{t('Progress')}</h1>
        </div>
        <div className={styles.sectionHistory}>
          <h1>{t('History')}</h1>
          {history.map((train) => (
            <Card
              key={train.id}
              title={train.title}
              type={train.type}
              plan={train.plan}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage
