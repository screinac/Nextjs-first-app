import Head from 'next/head'

// import your icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

// import Hero style components
import {
  Hero,
  BackgroundImage,
  Heading,
  BottomLine,
  ParagraphCorner,
  BarLink,
  IconBar,
  Icon,
} from '../components/home/heroComponents'

// import Content style components
import {
  Content,
  Column,
  TextBlock,
  Title,
  Subtitle,
  Line,
  Text,
  ContentImage,
} from '../components/home/contentComponents'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero>
        <BackgroundImage
          alt='Green background image'
          src='/images/greenBackground.jpg'
          quality={100}
        />

        <Heading>vegan</Heading>

        <BottomLine>
          <ParagraphCorner>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, harum.
          </ParagraphCorner>

          <IconBar>
            <BarLink href='https://es-la.facebook.com/'>
              <Icon icon={faInstagram} />
            </BarLink>
            <BarLink href='https://www.youtube.com/'>
              <Icon icon={faFacebook} />
            </BarLink>
            <BarLink href='https://www.youtube.com/'>
              <Icon icon={faWhatsapp} />
            </BarLink>
          </IconBar>
        </BottomLine>
      </Hero>

      <Content>
        <Column left>
          <TextBlock left>
            <Title>lorem</Title>
            <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
            <Line left />
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam provident quisquam, aut dolore quas molestias fugiat eos
              est inventore.
            </Text>
          </TextBlock>
        </Column>

        <Column invert>
          <ContentImage
            src='/images/fruit.png'
            alt='Fruit'
            width={300}
            height={200}
          />
        </Column>

        <Column left>
          <ContentImage
            src='/images/fruit.png'
            alt='Fruit'
            width={300}
            height={200}
          />
        </Column>

        <Column>
          <TextBlock>
            <Title>lorem</Title>
            <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
            <Line />
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam provident quisquam, aut dolore quas molestias fugiat eos
              est inventore.
            </Text>
          </TextBlock>
        </Column>
      </Content>

      <Hero>
        <BackgroundImage
          alt='Green background image'
          src='/images/background.jpeg'
        />

        <Heading>cafe</Heading>
      </Hero>

      <Content>
        <Column left>
          <TextBlock left>
            <Title>lorem</Title>
            <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
            <Line left />
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam provident quisquam, aut dolore quas molestias fugiat eos
              est inventore.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam provident quisquam, aut dolore quas molestias fugiat eos
              est inventore.
            </Text>
          </TextBlock>
        </Column>

        <Column invert>
          <ContentImage
            src='/images/fruit.png'
            alt='Fruit'
            width={300}
            height={200}
          />
        </Column>

        <Column left>
          <ContentImage
            src='/images/fruit.png'
            alt='Fruit'
            width={300}
            height={200}
          />
        </Column>

        <Column>
          <TextBlock>
            <Title>lorem</Title>
            <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
            <Line />
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam provident quisquam, aut dolore quas molestias fugiat eos
              est inventore.
            </Text>
            <Title>lorem</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam provident quisquam, aut dolore quas molestias fugiat eos
              est inventore.
            </Text>
          </TextBlock>
        </Column>
      </Content>
    </>
  )
}
