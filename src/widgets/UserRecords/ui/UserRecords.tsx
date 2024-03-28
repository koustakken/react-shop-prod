import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './UserRecords.module.scss'
import { FC } from 'react'

interface UserRecordsProps {
  name: string
  value: string
  year: string
}

export const UserRecords: FC<UserRecordsProps> = (props) => {
  const { name, value, year } = props
  return (
    <div className={classNames(styles.root, {}, [])}>
      <h3>{name}</h3>
      <span>{value}</span>
      <p>{year}</p>
    </div>
  )
}
