import Head from 'next/head';
import styled from 'styled-components';
import { Author, DescriptionBlock } from './homeComponents/DescriptionBlock';
import { Video } from './homeComponents/VideoComponent';


const Wrapper = styled.div`
  margin:0;
  padding-bottom:100px;
  background: #1B1914;
  width:100%;

`

const Circle = styled.div<{left:string, top: string,}>`
  
  position: absolute;
  width: 215px;
  height: 198px;
  left: ${props => props.left};
  top: ${props => props.top};

  background: #F9A70E;
  opacity: 0.5;
  filter: blur(75px);
  border-radius: 150px;

`

export function HomePage() {

  return (
    <Wrapper>
      <Head>
        <link href="/fonts/ANTQUAI.TTF" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
      </Head>

      <Video/>      

      <Circle left="1180px" top="1060px"/>
      <Circle left="350px" top="1459px"/>


      <DescriptionBlock />
      <Author>
          <h2>Авторы</h2>
          <p>Veret - разработчик и создатель</p> <br/>
          <p>IIIDarkIII — автор идеи, директор, разработчик и дизайнер проекта</p>
      </Author>
    </Wrapper>
  )

}