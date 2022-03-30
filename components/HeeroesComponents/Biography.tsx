import Head from 'next/head';
import styled from 'styled-components';
import { Name, Wrapper } from './commonStyles';



const Description = styled.div`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
`

export const Biography = () => {
    return (
        <Wrapper>
            <Name isMargin={false}><p>Биография</p></Name>
            <Description>
            Вульфстен — воин гномьего клана Северного ветра. Он силён и приучен жить в суровых условиях гор. Нужно заметить, что немногие гномы отваживаются покидать свои подземные города. Путешествия научили его дружелюбно относиться к другим народам, что покрыло его позором в глазах более консервативных членов гномьего общества. После того, как его простые высказывания и недипломатичые убеждения стали слишком часто сбивать короля с толку, его отправили на границу в качестве капитана важного гарнизона.
            </Description>
        </Wrapper>
    )
}