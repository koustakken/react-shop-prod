import { render, screen } from '@testing-library/react'
import { Button } from './Button'

// если не добавлять в каждый файл будет ошибка
// использования .toBeInTheDocument()
import '@testing-library/jest-dom'

describe('button unit', () => {
  test('example', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
