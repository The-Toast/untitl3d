import styled from '@emotion/styled'
import Link from 'next/link'

export const Header = styled.header`
  display: flex;
  position: static;
  width: 100vw;
  height: 4rem;
  justify-content: center;   
  background: ${({theme}) => theme.ui.headerColor};
`

export const HeaderContent = styled.div`
  display: flex;
  width: 77.5rem;
  margin: 0 0.625rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: calc(100vw - 12.5rem);
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: calc(100vw - 6.25rem);
  } 
`

export const LogoLink = styled(Link)`
  
`

export const HeaderInner = styled.div`
  display: flex;
  gap: 0.625rem;
`