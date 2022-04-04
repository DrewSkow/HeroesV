import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 880px;
    max-height: 500px;
    margin: 120px auto 0 auto;
    position: relative;

    h2{
        text-align:center;
        font-family: Antiqua;
        font-style: italic;
        font-weight: bold;
        font-size: 36px;
        line-height: 35px;
        color: #F7F2E9;
    }
`;


const WrapperCircle = styled.div`
    position: relative;
    width: 880px;
    height: 460px;    
    background: rgba(33, 30, 25, 0.4);
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding-bottom: 20px;
    overflow: hidden;
    z-index: 10;

    &.c1{
        display: block;
        position: absolute;
        top: -5%;
        right: -2%;
    }

    .с2{
        display: block;
        position: absolute;
        bottom: -5%;
        left: -2%;
    }
`

const Circle = styled.div <{vertical:string, horizontal:string}>`
    width: 200px;
    height: 200px;

    ${props => props.vertical};
    ${props => props.horizontal};

    background: #F9A70E;
    opacity: 0.4;
    filter: blur(75px);
    border-radius: 150px;
    
    position: absolute;
    z-index: 1;

`

const FeaturesBlock = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    row-gap:20px;
    margin-top: 30px;
`;

const Feature = styled.div`
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
`

const Description = styled.div`
    margin: 25px auto 0;
    text-align:center;
    font-size: 18px;
    line-height: 21px;
    color: #BEAB8D;
`

const ButtonBlock = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 50px;
    margin-top: 40px;

    div{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #BEAB8D;

        padding: 15px 40px;

        border: 1px solid #BEAB8D;
        box-sizing: border-box;
        filter: drop-shadow(0px 0px 10px rgba(249, 167, 14, 0.5));
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background: rgba(190, 171, 141, 0.1);
        }

        &:active{
            color: black;
            background: #F9A70E;
            border: 1px solid #F9A70E;      
        }
    }    
`;


export const DescriptionBlock = () => {
    return (
        <Wrapper>
            <WrapperCircle>
                <h2>Об игре</h2>
                <FeaturesBlock>
                    <Feature>Проведена полная балансировка игры</Feature>
                    <Feature>Реализовано проведение турниров</Feature>
                    <Feature>Добавлены новые персонажи и карты</Feature>
                    <Feature>Доступно 8 расс и более 60 арен</Feature>
                </FeaturesBlock>
                <Description>
                    Есть канал в дискорде, где вы сможете узнать всю информацию о данной версии <br/>
                    Только с этой версией вы сможете играть вместе с другими игроками
                </Description>
                <ButtonBlock>
                    <Link href="https://discord.gg/X6GAqTe"><div>Наш сервер в Discord</div></Link>
                    <Link href='https://zen.yandex.ru/id/5f81e9feafcf672f1465cb3b'><div>Новости</div></Link>
                    <Link href='/heroes'><div>Персонажи</div></Link>
                    <Link href='/maps'><div>Карты</div></Link>
                </ButtonBlock>
            </WrapperCircle>
            <Circle vertical='top: -5%;' horizontal='right: -2%;'/>
            <Circle vertical='bottom: -5%;' horizontal='left: -2%;'/>
        </Wrapper>
    )
}