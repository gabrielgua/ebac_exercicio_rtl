import { render, screen } from "@testing-library/react"
import Post from "."


describe('Testes para o componente de Post', () => {
  test('Deve renderizar corretamente', () => {
    render(
      <Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/210255920/porsche-911-993-1998-ruf-turbo-r-118-gt-spirit-2d3e13a2.jpg">
        Texto do post!
      </Post>
    )

    expect(screen.getByText('Texto do post!')).toBeInTheDocument()
  })
})