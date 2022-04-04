import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Biography } from './HeeroesComponents/Biography';
import { Conditions } from './HeeroesComponents/Conditions';
import { Skills } from './HeeroesComponents/Skills';
import { Specifications } from './HeeroesComponents/Specifications';

const Wrapper = styled.div`
    background: #1B1914 ;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    padding-top: 180px;

`
const Content = styled.div`
    max-width: 1180px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    column-gap: 50px;
`

const Header = styled.p`
    font-family: 'Antiqua';
    font-style: italic;
    font-weight: 700;
    font-size: 36px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    margin: 0 0 40px 0;
`


const Hero = styled.div`
    
`

const Model = styled.div`
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &>div{
        margin-left: -35px;
        margin-bottom: -50px;
        z-index: 100
}

`

const Name = styled.div`
    font-family: 'Ubuntu';
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-align:center;
    margin-top: 20px;
`

const Sername = styled.div`
    font-family: 'Ubuntu';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #BBBAB8;
    text-align: center;
    margin-top: 6px;
`

const Description = styled.div`
    background:rgba(33, 30, 25, 0.5);
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);    
    border-radius: 5px;
    padding: 30px;

    display:flex;
    align-items: center;
    column-gap:20px;
`

const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 17px;

`

const DescButtons = styled.div<{isActive:boolean}>`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${props => props.isActive? "#000" : "#fff"};
    padding: 20px 20px;
    background: ${props => props.isActive? "#F9A70E" : "#211E19" };
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    text-align: center;
    transition: 0.1s;
    cursor:pointer;
`

const selectComponent = (v:string) => {
    switch (v){
        case "specifications":
            return <Specifications/>
        case "skills":
            return <Skills/>
        case "biography":
            return <Biography/>
        case "conditions":
            return <Conditions/>
    }
}


export const HeroesComponent = () => {
    const [description, setDescription] = useState<"specifications" | "skills" | "biography" | "conditions">("specifications");
    return(
        <Wrapper>
            <Header>Персонажи</Header>
            <Content>
                <Hero>
                    <Model>
                        <div><Image width="181px" height="202px" src='/images/hero.png'/></div>
                        <Image width="180px" height="85px" src='/images/HeroesPlace.svg'/>
                    </Model>
                    <Name>Вульфстен</Name>
                    <Sername>Рунный жрец</Sername>

                </Hero>
                <Description>
                    <ButtonsBlock>
                        <DescButtons isActive={description==="specifications"} onClick={()=>setDescription("specifications")}>Характеристики</DescButtons>
                        <DescButtons isActive={description==="skills"} onClick={()=>setDescription("skills")}>Навыки</DescButtons>
                        <DescButtons isActive={description==="biography"} onClick={()=>setDescription("biography")}>Биография</DescButtons>
                        <DescButtons isActive={description==="conditions"} onClick={()=>setDescription("conditions")}>Условия</DescButtons>
                    </ButtonsBlock>
                    {selectComponent(description)}
                </Description>
            </Content>
        </Wrapper>
    )
}