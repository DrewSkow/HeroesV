import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

    margin: 100px auto 0;
    padding: 50px;

    background: rgba(33, 30, 25, 0.5);
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border-radius: 5px;

    max-width:880px;

    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items: column;

    h2{
        text-align:center;
        font-family: Antiqua;
        font-style: italic;
        font-weight: bold;
        font-size: 36px;
        line-height: 35px;
        color: #F7F2E9;
    }

    .description{
        margin: 25px auto 0;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #BEAB8D;
    }
`;

const Features = styled.div`

    display: flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    row-gap:20px;
    margin-top: 30px;

    .feature{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 380px;
        height: 80px;

        background: #27231E;
        box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
        border-radius: 5px;

        font-family: Ubuntu;
        font-size: 18px;
        line-height: 21px;
        color: #F7F2E9;
    }
`;

const ButtonBlock = styled.div`

    margin: 40px auto 0 auto;
    display:flex;
    column-gap:20px;
    align-items:center;

    button{
        font-family: Ubuntu;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #BEAB8D;

        border: 1px solid #BEAB8D;
        filter: drop-shadow(0px 0px 10px rgba(249, 167, 14, 0.5));
        border-radius: 5px;
        background:none;
    
        cursor:pointer;
    }

    .server{
        padding: 15px 42px;
    }
    .news{
        padding: 15px 33px;
    }
    .pers{
        padding: 15px 35px;
    }
    .map{
        padding: 15px 42px;
    }

    button:hover{
        background: rgba(190, 171, 141, 0.1);
        border-color:#BEAB8D;
        box-shadow: 0px 0px 10px rgba(249, 167, 14, 0.5);
        border-radius: 5px;

        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #BEAB8D;
    }

    button:active{
        background: #F9A70E;
        color: #000000;
        border-color: #F9A70E;
    }
    
`;

export const Author = styled.div`

    margin:100px auto 100px;

    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align:center;
    color: #BEAB8D;

    p{
        margin 0;
        padding: 0;
    }

    p:first-child{
        margin-bottom:15px;
    }

    h2{
        font-family: Antiqua;
        font-style: italic;
        font-weight: bold;
        font-size: 36px;
        line-height: 35px;
        color: #F7F2E9;
    }
`;

export const DescriptionBlock = () => {

    
    return (
        <Wrapper>
            <h2>Об игре</h2>
            <Features>
                <div className='feature'>Проведена полная балансировка игры</div>
                <div className="feature">Реализовано проведение турниров</div>
                <div className="feature">Добавлены новые персонажи и карты</div>
                <div className="feature">Доступно 8 расс и более 60 арен</div>
            </Features>
            <div className="description">
                Есть канал в дискорде, где вы сможете узнать всю информацию о данной версии <br/>
                Только с этой версией вы сможете играть вместе с другими игроками
            </div>
            <ButtonBlock>
                <button className='server'>Наш сервер в Discord</button>
                <button className='news'>Новости</button>
                <button className='pers'>Персонажи</button>
                <button className='map'>Карты</button>
            </ButtonBlock>
        </Wrapper>
    )
}