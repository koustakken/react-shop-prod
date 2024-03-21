import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames"

import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = (
    {
        className,
    } : NavbarProps
) => {
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/about'} className={styles.link}>About</AppLink>
                <AppLink to={'/'} className={styles.link}>Main</AppLink>
            </div>
        </div>
    )
}