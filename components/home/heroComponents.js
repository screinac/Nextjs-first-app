import styled from 'styled-components'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hero = styled.div`
  height: 90vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: #fff;
`

export const BackgroundImage = styled(Image).attrs({
  layout: 'fill',
  objectFit: 'cover',
  objectPosition: 'center',
})`
  z-index: -1;
`

export const Heading = styled.h1`
  font-size: clamp(1rem, 17vw, 10rem);
  text-transform: uppercase;
  justify-content: flex-end;
  display: flex;
  margin: 0;
  letter-spacing: 15px;
`

export const BottomLine = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
`

export const ParagraphCorner = styled.p`
  margin-left: 25px;
  font-size: clamp(1rem, 1.5vw, 0.2rem);
  width: 300px;
`

// Usar Link solo para referencias al mismo sitio, para enlaces externos usar solo <a>
export const BarLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  margin: 0;
`

export const IconBar = styled.div`
  margin-right: 25px;
`

export const Icon = styled(FontAwesomeIcon)`
  width: 30px;
  margin: 0 10px;
`
