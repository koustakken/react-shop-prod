import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Navbar.module.scss'
import { ProfileCard } from '@/widgets/ProfileCard'
import Avatar from '@/shared/assets/avatar.jpg'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.root, {}, [className])}>
      <div className={styles.wrapper}>
        <ProfileCard
          imgUrl={Avatar}
          name={'@kous.takken'}
          description={'Junior Js Developer'}
          tags={['code', 'arm wrestling', 'bench press', 'powerlifting']}
        />
      </div>
    </div>
  )
}
