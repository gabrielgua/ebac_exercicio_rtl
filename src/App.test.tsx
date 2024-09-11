import { render, screen } from "@testing-library/react"
import App from "./App"

describe('Testes para o componente App', () => {
  test('Deve renderizar corretamente', () => {
    render(<App />)
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})