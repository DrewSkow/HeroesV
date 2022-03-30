import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper } from './commonStyles';

const ItemWrapper = styled.div`
    margin-top: 15px;

    display:flex;
    column-gap:15px;

   p{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
        margin: 0;
        padding: 0;
   }
`

const Cost = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;

    position: absolute;
    bottom: 30px;
    left: 20px;

`

const CostText = styled.div`
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #fff;
`

const CostImage = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: #F9A70E;

   display: flex;
   column-gap: 5px;

`

const Item = (text:string) => {
    return(
        <ItemWrapper>
            <Image width="25px" height="25px" src="/images/sword_horizontal.svg"/> 
            <p>{text}</p>
        </ItemWrapper>
    )

    
}

export const Conditions = () => {

    const conditionals = ["помогая проекту", "учавствуя в клановых войнах", "учавствуя в соревнованиях", "набрав нужное количество «Воли»" ]
    
    return(
        <Wrapper>
            {conditionals.map(item => Item(item))}
            <Cost>
                <CostText>Стоимость:</CostText>
                <CostImage>220<Image width="28px" height="28px" src="/images/cost.svg" /></CostImage>
            </Cost>
        </Wrapper>
    )
}