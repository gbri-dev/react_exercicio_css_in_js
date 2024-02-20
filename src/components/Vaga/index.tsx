import { JobLink, Job, JobTitle } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMax,
  salarioMin,
  requisitos
}: Props) => (
  <Job>
    <JobTitle>{titulo}</JobTitle>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <JobLink>Ver detalhes e candidatar-se</JobLink>
  </Job>
)

export default Vaga
