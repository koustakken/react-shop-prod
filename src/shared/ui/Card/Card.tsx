import { FC, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import Bookmark from '@/shared/assets/icons/bookmark.svg'
import BookmarkFill from '@/shared/assets/icons/bookmark-fill.svg'
import { Badge, ThemeBadge } from '@/shared/ui/Badge/Badge'

interface CardProps {
  className?: string
  icon?: SVGAElement
  title: string
  type: string
  description: string
  plan: string
}

export const Card: FC<CardProps> = (props) => {
  const { className, title, type, description, plan } = props
  const [favorite, setFavorite] = useState(false)
  const onFavoriteClick = () => {
    setFavorite((prev) => !prev)
  }

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <div className={styles.main}>
        <Button theme={ThemeButton.CLEAR} onClick={onFavoriteClick}>
          {favorite ? <BookmarkFill /> : <Bookmark />}
        </Button>
        <p className={styles.title}>{title}</p>
        <Badge theme={ThemeBadge.CLEAR}>{type}</Badge>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.plan}>
        <span className={styles.time}>26/03/2024</span>
        <p>{plan}</p>
      </div>
    </div>
  )
}
