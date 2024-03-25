import { render, screen } from '@testing-library/react'
import { Button } from './Button'
// TODO надо исправить
// если не добавлять в каждый файл будет ошибка
import '@testing-library/jest-dom'

describe('', () => {
  test('', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
    //  Cannot find module '@/shared/lib/classNames/classNames' from 'src/shared/ui/Button/Button.tsx'
  })
})
