import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero>
        <Heading>Abo</Heading>
      </Hero>
    </>
  )
}
