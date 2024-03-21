import { classNames } from "@/shared/lib/classNames/classNames"

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
            <div>
                <input type="text" />
                <button>Toggle</button>
            </div>
        </div>
    )
}