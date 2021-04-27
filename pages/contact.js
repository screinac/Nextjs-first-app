import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

const Hero = styled.div`
  height: 90vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero>
        <Image src='/images/contact.jpg' alt='me' layout='fill' />
      </Hero>
    </>
  )
}
