import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledImage = styled(Image)`
  /* height: 500px; */
  z-index: -1;
`

const Icon = styled(FontAwesomeIcon)`
  /* height: 500px; */
  width: 40px;
  color: #fff;
  margin: 0 10px;
`

const Wrap = styled.div`
  height: 90vh;
  /* background: #fff;
  display: flex;
  justify-content: center;
  align-items: center; */
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`
const Heading = styled.h1`
  color: #000;
  font-size: clamp(1rem, 17vw, 10rem);
  text-transform: uppercase;
  justify-content: flex-end;
  display: flex;
  margin: 0;
  letter-spacing: 15px;
`
const IconBar = styled.div`
  /* background: #fff;
  display: flex;
  justify-content: center;
  align-items: center; */
  display: flex;
  position: absolute;
  bottom: 10px;
  width: 100vw;
  margin-bottom: 10px;
  justify-content: flex-end;
`

const TitleContainer = styled.div``

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Wrap>
        <StyledImage
          alt='Contact'
          src='/images/contact.jpg'
          layout='fill'
          // width={500}
          // height={500}
          objectFit='cover'
          objectPosition='center'
        />
        <TitleContainer>
          <Heading>matter</Heading>
          <Heading>horn</Heading>
        </TitleContainer>

        <IconBar>
          <Icon icon={faCode} />
          <Icon icon={faHighlighter} />
          <Icon icon={faCode} style={{ marginRight: '100px' }} />
        </IconBar>
      </Wrap>
    </>
  )
}
