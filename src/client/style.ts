import styled from 'styled-components'

interface ContainerProps {
  center?: boolean
  bgColor?: string
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  top: 0;
  left: 0;
  margin: 0px;
  background-color: ${props => props.theme.colors.red};

  ${({ center }) => center && `
    margin: 0 auto;
    width: 50%;
  `}

  @media (max-width: 600px) {
    width: 100%;
  }
`

export {
  Container
}