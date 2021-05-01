import styled from 'styled-components'
import Image from 'next/image'

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 100px 0;
  /* @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding: 0 0 20px 0;
  } */
`

export const Column = styled.div`
  display: flex;
  justify-content: ${(props) => (props.left ? 'flex-end' : 'flex-start')};
  align-items: center;

  /* @media screen and (max-width: 760px) {
    justify-content: center;
    order: ${(props) => (props.invert ? '2' : '1')};
  } */
`

export const TextBlock = styled.div`
  display: block;
  color: #000;
  text-align: ${(props) => (props.left ? 'right' : 'left')};
  width: 300px;
`

export const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
`

export const Subtitle = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
`

export const Line = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: #000;
  margin-left: ${(props) => (props.left ? 'auto' : '0')};
  margin-right: ${(props) => (props.left ? '0' : 'auto')};
`
export const Text = styled.p`
  font-size: 1rem;
`

export const ContentImage = styled(Image).attrs({})``
