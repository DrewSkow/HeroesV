import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

    & button {
        border: none;
        padding: 10px 35px;
        background: #F9A70E;
        box-shadow: 0px 0px 10px rgba(249, 167, 14, 0.4), inset 0px 0px 3px rgba(255, 255, 255, 0.2);
        border-radius: 5px;

        font-family: 'Ubuntu';
        font-style: 400;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        cursor: pointer;
    }

    & button:hover{
        background: #FAB93E;
    }

    & button:active{
        background: #FCD386;
    }

`

interface Props{
    setDownloadPopup: (v:boolean) => void;
}

export const HeaderDownloadButton = (props: Props) => {
    return(
        <Wrapper onClick={()=> props.setDownloadPopup(true)}>
            <button onClick={()=>{}}>Скачать</button>
        </Wrapper>
    )
}