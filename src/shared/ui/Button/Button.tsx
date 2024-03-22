import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps & React.PropsWithChildren> = (props) => {
    const { 
        className, 
        children,
        theme, 
        ...otherProps 
    } = props;
    return (
        <button
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps} 
        >
            {children}
        </button>
    )
}