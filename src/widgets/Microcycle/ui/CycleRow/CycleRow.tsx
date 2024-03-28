import styles from '@/widgets/Microcycle/ui/Microcycle.module.scss'
import { useTranslation } from 'react-i18next'

export const CycleRow = () => {
  const { t } = useTranslation()
  return (
    <tr>
      <td rowSpan={4} className={styles.date}>
        {t('26.03.2024')}
      </td>
      <td>{t('Middle')}</td>
      <td>{t('Press')}</td>
      <td>{t('Bench Press')}</td>
      <td>{t('1,0')}</td>
      <td>{t(' ')}</td>
      <td className={styles.bold}>{t('50')}</td>
      <td>{t('6')}</td>
      <td>{t('2')}</td>
      <td>{t('50%')}</td>
      <td>{t('50')}</td>
      <td>{t('6')}</td>
      <td>{t('2')}</td>
      <td>{t('50%')}</td>
      <td>{t('50')}</td>
      <td>{t('6')}</td>
      <td>{t('2')}</td>
      <td>{t('50%')}</td>
    </tr>
  )
}
