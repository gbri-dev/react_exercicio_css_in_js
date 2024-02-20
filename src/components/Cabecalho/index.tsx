import { Header } from './styles'

export type Props = {
  children: string
}

const Cabecalho = ({ children }: Props) => <Header>{children}</Header>

export default Cabecalho
