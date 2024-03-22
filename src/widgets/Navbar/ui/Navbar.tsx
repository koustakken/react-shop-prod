import { useTranslation } from "react-i18next";
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
    const {t} = useTranslation()

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/about'} className={styles.link}>{t('About')}</AppLink>
                <AppLink to={'/'} className={styles.link}>{t('Main')}</AppLink>
            </div>
        </div>
    )
}