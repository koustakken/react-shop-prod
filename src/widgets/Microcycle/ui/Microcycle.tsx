import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Microcycle.module.scss'
import { useTranslation } from 'react-i18next'
import { CycleRow } from './CycleRow/CycleRow'

export const Microcycle = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.root, {}, [])}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <th colSpan={18}>{t('Micro Cycle 1')}</th>
        </thead>
        <thead className={styles.subhead}>
          <th>{t('Date')}</th>
          <th>{t('Type')}</th>
          <th>{t('Group')}</th>
          <th>{t('Exercise')}</th>
          <th>{t('Coef')}</th>
          <th>{t('Factor')}</th>
          <th>{t('Weight')}</th>
          <th>{t('Reps')}</th>
          <th>{t('Approach')}</th>
          <th>{t('%')}</th>
          <th>{t('Weight')}</th>
          <th>{t('Reps')}</th>
          <th>{t('Approach')}</th>
          <th>{t('%')}</th>
          <th>{t('Weight')}</th>
          <th>{t('Reps')}</th>
          <th>{t('Approach')}</th>
          <th>{t('%')}</th>
        </thead>
        <tbody>
          <CycleRow />
        </tbody>
      </table>
    </div>
  )
}
