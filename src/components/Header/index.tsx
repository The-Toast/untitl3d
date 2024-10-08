'use client'

import {useEffect} from 'react'

import {useDarkStore} from 'stores'

import {SunIcon, MoonIcon} from 'assets'

import * as S from './style'

export default function Header() {
  const {isDark, setIsDark} = useDarkStore()

  const handleClick = () => {
    setIsDark(!isDark)
    localStorage.setItem('dark', String(!isDark))
  }

  useEffect(() => {
    const localState = localStorage.getItem('dark')
    if (localState) setIsDark(localState == 'true')
  }, [setIsDark])

  return (
    <S.Header>
      <S.HeaderContent>
        <S.LogoLink href='/'>
          <Title>Hello, World!</Title>
        </S.LogoLink>
        <S.HeaderInner>
          <ToggleBtn onClick={handleClick}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </ToggleBtn>
        </S.HeaderInner>
      </S.HeaderContent>
    </S.Header>
  )
}

import styled from '@emotion/styled'

const Title = styled.h1`
  color: ${({theme}) => theme.ui.textColor}
`

const ToggleBtn = styled.button`
  padding: 0.5rem;
  border-radius: 0.75rem;
  background: ${({theme}) => theme.ui.boxColor};
  svg {
    display: block;
  }
`