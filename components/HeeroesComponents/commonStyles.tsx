import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 450px;
    height: 300px;  

    background: #211E19;
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 0 20px 20px;

    position:relative;

`

export const Name = styled.div<{isMargin:boolean}>`
    background: linear-gradient(90deg, rgba(57, 51, 45, 0) 0%, #866121 52.4%, rgba(57, 51, 45, 0) 100%);
    width: 100%;
    p{
        font-family: 'Antiqua';
        font-style: italic;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: #fff;
        text-align: center;
        padding: 7px 0;
        margin: ${props => props.isMargin? "25px" : "0"} 0 15px ;
    }
`