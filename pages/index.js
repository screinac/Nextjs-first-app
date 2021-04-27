import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  /* height: 500px; */
  z-index: -1;
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
  font-size: 10rem;
`

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

        <Heading>Hola</Heading>
      </Wrap>
    </>
  )
}
