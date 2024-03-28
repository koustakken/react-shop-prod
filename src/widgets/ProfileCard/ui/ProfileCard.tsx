import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, ThemeBadge } from '@/shared/ui/Badge/Badge'

interface ProfileCardPros {
  imgUrl: string
  name: string
  description: string
  tags: string[]
}

export const ProfileCard: FC<ProfileCardPros> = (props) => {
  const { imgUrl, name, description, tags } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.root, {}, [])}>
      <div className={styles.hero}>
        <img className={styles.img} src={imgUrl} alt={name} />
      </div>
      <div className={styles.about}>
        <p>{name}</p>
        <span>{description}</span>
      </div>
      <div className={styles.tags}>
        <p>{t('Tags')}</p>
        <div className={styles.tagList}>
          {tags.map((item) => (
            <Badge theme={ThemeBadge.CLEAR} key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
