import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Name, Wrapper } from './commonStyles';

const ItemPos = styled.div`
    display: flex;
    flex-direction: column;
    row-gap:10px;
`

const ItemWrapper = styled.div`
    font-family: 'Ubuntu';
    margin-left: 50px;
    max-height: 50px;

    display: flex;
    column-gap: 15px;
    align-items: center;

`

const ItemDescription = styled.div`

    h4{
        font-weight: medium;
        font-size: 18px;
        line-height: 21px;
        color: #F9A70E;
        margin: 0;
        padding: 0;
    }

    p{
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        color: #DECAB6;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
`

const DescriptionPopup = styled.div<{isActive: boolean, x: number,y: number}>`
    max-width: 270px;
    position: absolute;
    top: ${props => props.y-350}px;
    left: ${props => props.x};
    background: #433D37;
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 20px;

    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #fff;

    display: ${props => props.isActive? "block" : "none"};
    z-index: 999;
`

interface IState{
    1:boolean;
    2:boolean;
    3:boolean;
}

const Item = (src: string, text:string, desc: string, active:boolean, setActive:(v:any) => void, id:number, pos: {x:number; y:number}, setPos:(v:any)=>void) => {

    const showPopup = (e: any) => {
        setActive((data: IState) => ({...data, [id]:true}));
        console.log(e)
        setPos((data:{x:number;y:number}) => ({...data, x:e.clientX,y:e.screenY}))
    }

    return(
        <ItemWrapper>
            <Image width="50px" height="50px" src={`/images/${src}.png`} />
            <ItemDescription>
                <h4>{text}</h4>
                <p onMouseEnter={showPopup} onMouseLeave={()=>setActive((data: IState) => ({...data, [id]:false}))} >Описание</p>
            </ItemDescription>
            <DescriptionPopup x={pos.x} y={pos.y} isActive={active}>{desc}</DescriptionPopup>
       </ItemWrapper>
    )
}

export const Skills = () => {
    const [showPopup, setShowPopup] = useState<IState>({
        1: false,
        2: false,
        3: false,
    });
    const [mousePosition,setMousePosition] = useState<{x:number; y:number}>({x:0,y:0});

    const desc1 = "Герой получает +1 к своей «Защите», если поле боя находятся не далее, чем в дне пути от его города"
    const desc2 = "Позволяет в сражении накладывать магические руны 1–2-го кругов на своих существ, временно давая им новые способности и изменяя характеристики"
    const desc3 = "Навык, который увеличивает дальность перемещения героя по суше на 10%"

    return(
        <Wrapper >
            <Name isMargin={false}><p>Обычные</p></Name>
            <ItemPos>
                {Item("test_skill","Основы знания рун", desc2, showPopup[1], setShowPopup, 1, mousePosition, setMousePosition)}
                {Item("test_skill2","Основы знания логистики", desc3, showPopup[2], setShowPopup, 2, mousePosition, setMousePosition)}
            </ItemPos>
            <Name isMargin={true}><p>Особые</p></Name>
            {Item("test_skill3","Страж границ",desc1, showPopup[3], setShowPopup, 3, mousePosition, setMousePosition)}
        </Wrapper>
    )
}