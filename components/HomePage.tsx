import Head from 'next/head';
import styled from 'styled-components';
import { DescriptionBlock } from './homeComponents/DescriptionBlock';
import { Video } from './homeComponents/VideoComponent';


const Wrapper = styled.div`
  margin:0;
  padding-bottom:100px;
  background: #1B1914;
  width:100%;

`

const Author = styled.div`

    margin:100px auto 0 auto;

    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align:center;
    color: #BEAB8D;

    p{
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
        margin 0;
        padding: 0;
    }

    p:first-child{
        margin-bottom:15px;
    }

    h2{
        font-family: "Antiqua";
        font-style: italic;
        font-weight: 700;
        font-size: 36px;
        line-height: 35px;
        color: #F7F2E9;
    }
`;

export function HomePage() {

  return (
    <Wrapper>
      <Video/>      
      <DescriptionBlock />
      <Author>
          <h2>Авторы</h2>
          <p>Veret - разработчик и создатель</p> <br/>
          <p>IIIDarkIII — автор идеи, директор, разработчик и дизайнер проекта</p>
      </Author>
    </Wrapper>
  )

}