import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import StyledGlobal, { Container } from './styles'
import themeLight from './theme/light'

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <StyledGlobal />
      <Header>EBAC</Header>
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
