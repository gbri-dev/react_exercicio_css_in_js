import styled from 'styled-components'

export const JobLink = styled.a`
  border-color: ${(props) => props.theme.secondColor};
  background-color: ${(props) => props.theme.firstColor};
  color: ${(props) => props.theme.secondColor};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.9s;
  &:hover {
    border-color: ${(props) => props.theme.firstColor};
    background-color: ${(props) => props.theme.secondColor};
    color: ${(props) => props.theme.firstColor};
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const Job = styled.div`
  border: 1px solid ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.firstColor};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`
export const JobTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
