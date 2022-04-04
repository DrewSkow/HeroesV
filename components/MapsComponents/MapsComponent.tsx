import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const Maps = styled.div`
    margin-top: 80px;
    position: relative;
    
    &>p{
        font-family: 'Antiqua';
        font-style: italic;
        font-weight: 700;
        font-size: 36px;
        line-height: 35px;
        text-align: center;
        color: #F7F2E9;
    }
    z-index: 0;
`

const Wrapper = styled.div`

    position: relative;

    max-width: 890px;
    margin: 40px auto;
    padding: 50px;

    background: rgba(33, 30, 25, 0.5);
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border-radius: 5px;

    display: flex;
    column-gap: 40px;

    font-family: 'Ubuntu';
    font-style: normal;

    z-index: 10;
`

const Map = styled.div`
    max-width: 340px;
`

const Description = styled.div`
`

const MapWrapper = styled.div`
    max-width: 340px;
    background: #39332D;
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 20px;
    
    &>p{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
        text-align: center;
        margin: 0 0 20px 0;
        padding: 0;
    }


`

const MapType = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-top: 20px;
`

const MapTypeButton = styled.div<{isActive:boolean}>`
    background: ${props => props.isActive? "#F9A70E" : "#39332D"};
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    border-radius: 5px;

    font-weight: ${props => props.isActive? "bold" : "normal"};
    font-size: 18px;
    line-height: 21px;
    color: ${props => props.isActive? "#000" : "#fff"};

    width: 160px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3;

    cursor: pointer;
`

const SwitchWrapper = styled.div`

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #BEAB8D;
    max-width: 280px;

    margin: 30px auto 0 auto;

    display: flex;
    justify-content: space-between;

    p{
        color: #fff;
        margin: 0;
        padding: 9px 0 0 0;
    }
`

const SwitchButton = styled.div`
    border: 1px solid #BEAB8D;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 10px rgba(249, 167, 14, 0.5));
    border-radius: 5px;

    width: 90px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background: rgba(190, 171, 141, 0.1);
    }
    
    &:active{
        background: #F9A70E;
        color: #000;
    }

    cursor:pointer;
`

const RowWrapper = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #fff;

    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;

    padding: 0 0 15px 0;
    margin-bottom: 15px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

`

const Title = styled.div`
    opacity: 0.5;
`

const Content = styled.div`
`

const Light = styled.div`

    position: absolute;
    bottom: 0;
    left: 25%;

    width: 870px;
    height: 597px;

    background: #F9A70E;
    opacity: 0.2;

    filter: blur(100px);
    border-radius: 139px;

    z-index: 5;

`

const Row = (title:string, content:string) => {
    return (
        <RowWrapper key={title}>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </RowWrapper>
    )
}

export const MapsComponent = () => {

    const title:string[] = ["Размер карты:", "Количество игроков:", "Города:", "Сложность:", "Подземелье:", "Вода:", "Режим игры:", "Основная цель:", "Слеза Асхи:", "Средний уровень героя:", "Ресурсы:"]
    const content:string[] = ["265x265", "8", "Случайные", "Средняя", "Отсутствует", "Отсутствует", "Неизвестно", "Убить всех", "Есть", "20", "50%"]
    
    const [level,setLevel] = useState<boolean>(true)

    return(
        <Maps>
            <p>Карты</p>
            <Wrapper>
                <Map>
                    <MapWrapper>
                        <p>Пустош Рая</p>
                        <Image width="336px" height="338px" src={level?"/images/test_map1.png":"/images/"}/>
                    </MapWrapper>
                    <MapType>
                        <MapTypeButton onClick={()=>setLevel(true)} key={1} isActive={level}><div>Суша</div></MapTypeButton>
                        <MapTypeButton onClick={()=>setLevel(false)} key={2} isActive={!level}><div>Подземелье</div></MapTypeButton>
                    </MapType>
                    <SwitchWrapper>
                        <SwitchButton key={1}><div >Назад</div></SwitchButton>
                        <p>1 из 2</p>
                        <SwitchButton key={2}><div>Вперёд</div></SwitchButton>
                    </SwitchWrapper>
                </Map>
                <Description>
                    {title.map((item,i) => {return Row(item, content[i])})}
                </Description>
                
            </Wrapper>
            <Light />
        </Maps>
    )
}