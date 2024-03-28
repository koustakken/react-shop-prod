import { FC, InputHTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './TextInput.module.scss'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const TextInput: FC<TextInputProps> = (props) => {
  const { className, placeholder } = props
  return (
    <input
      className={classNames(styles.root, {}, [className])}
      placeholder={placeholder}
    />
  )
}
