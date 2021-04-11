import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela de um computador"
    />
  </S.Wrapper>
)

export default Main
