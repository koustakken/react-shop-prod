import { classNames } from "@/shared/lib/classNames/classNames"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

import styles from './Header.module.scss'

interface HeaderProps {
    className?: string;
}

export const Header = (
    {
        className,
    } : HeaderProps
) => {
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <span>React App</span>
            <div className={styles.right}>
                <input type="text" />
                <ThemeSwitcher />
            </div>
        </div>
    )
}