import styled from 'styled-components';
import Image from 'next/image';
import { Wrapper } from './commonStyles';

const DescHead = styled.div`
    background: linear-gradient(90deg, rgba(57, 51, 45, 0) 0%, #866121 52.4%, rgba(57, 51, 45, 0) 100%);
    font-family: 'Antiqua';
    font-style: italic;
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    color: #fff;
    text-align: center;
    padding: 7px 0;
`

const DescBody = styled.div`
    padding: 0 55px 20px 50px;
`

const Field = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    &>div{
        display: flex;
        align-items: center;
        margin-top:15px;

        color: #fff;
    }

    p{
        padding: 0;
        margin: 0 0 0 15px;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #fff;

    }
`


const descRow = (src:string, text:string, v:number) => {
    return (
    <Field>
        <div>
            <Image width="20px" height="20px" src={`/images/${src}.svg`} />
            <p>{text}</p>
        </div>
        <div >{v}</div>
    </Field> 
    )
}


export const Specifications = () => {
    return(
        <Wrapper>
            <DescHead>Характеристики</DescHead>
            <DescBody>
                {descRow("sword", "Нападение", 0)}
                {descRow("shield", "Защита", 1)}
                {descRow("MagicStick", "Колдовство", 0)}
                {descRow("book", "Знание", 0)}
                {descRow("eagle", "Боевой дух", 0)}
                {descRow("rainbow", "Удача", 0)}
                {descRow("mana", "Мана", 2)}
            </DescBody>
        </Wrapper>
    )
}