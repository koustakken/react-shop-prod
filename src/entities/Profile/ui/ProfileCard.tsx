import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, ThemeBadge } from '@/shared/ui/Badge/Badge'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData/getProfileData'
// import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
// import { getProfileError } from '@/entities/Profile/model/selectors/getProfileError/getProfileError'

interface ProfileCardPros {
  imgUrl: string
  className?: string
}

export const ProfileCard: FC<ProfileCardPros> = (props) => {
  const { imgUrl, className = '' } = props
  const { t } = useTranslation()

  const data = useSelector(getProfileData)
  // const isLoading = useSelector(getProfileIsLoading)
  // const error = useSelector(getProfileError)

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <div className={styles.hero}>
        <img className={styles.img} src={imgUrl} alt={'avatar'} />
      </div>
      <div className={styles.about}>
        <p>{data?.userTag}</p>
        <span>{data?.description}</span>
        <Button theme={ThemeButton.OUTLINED}>{t('Edit Profile')}</Button>
      </div>
      <div className={styles.tags}>
        <p>{t('Tags')}</p>
        <div className={styles.tagList}>
          {data?.tags?.map((item) => (
            <Badge theme={ThemeBadge.CLEAR} key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
