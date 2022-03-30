import React, { useState } from 'react'
import styled from 'styled-components';
import { LinkButton } from './HeaderButton';

const Wrapper = styled.div`
   width: 100%;
   background: #1B1914; 
   box-shadow: inset 0px 4px 10px rgba(255, 255, 255, 0.1);
`

const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr 1fr;

    max-width: 1180px;
    row-gap: 15px;
    padding-top: 30px;
    margin: 0 auto;

    .eMail{
        display: flex;
        align-items: center;
    }

    .top{
        display: flex;
        align-items: start;
    }

    .bot{
        display: flex;
        align-items: end;
    }

    .icon{
        width: 25px;
        height: 25px;

        background:#F9A70E;

        border-radius: 3px;
        margin-right: 15px;

        cursor: pointer;
        
        &:hover{
            background: #FAB93E;
        }
        &:active{
            background: #FCD386;
        }
    }
`

const Underline = styled.div`
    border-top: 0.5px solid #727171;
    max-width: 1180px;
    margin: 30px auto 0;
    padding: 15px 0 20px;

    display: flex;
    justify-content: space-between;

    font-family: 'Antiqua';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #727171;

    a{
        text-decoration: underline;
        color: #727171;

        &:hover{
            color: #BEAB8D;
        }

        &:active{
            color: #F9A70E;
        }
    }

    p{
        margin-top: 13px;
        margin-bottom: 20px;
    }
`

const Button = styled.div`

    font-family: 'Ubuntu';
    font-style: 400;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: end;
    grid-row: 1/3;
    grid-column: 5/5;


    cursor: pointer;

    div{
        border: 1px solid #F9A70E;
        box-shadow: 0px 0px 10px rgba(249, 167, 14, 0.1);
        border-radius: 5px;

        color: #F9A70E;
        padding: 10px 20px;

        &:hover{
            background: rgba(249, 167, 14, 0.1);
        }

        &:active{
            background: #FCD386;;
        }
    }
`

const Copied = styled.div<{isShow:boolean}>`
    background: #1B1914;
    color: white;
    opacity: 0.5;
    position: absolute;
    left: 23%;
    bottom: 65px;
    z-index: 1000000;
    display: ${props => props.isShow? "block" : "none"};

`

interface Props{
    setDownloadPopup: (v:boolean)=>void;
}

export const Footer = (props: Props) => {

    const [clipboardCheck, setClipboardCheck] = useState(false);

    const toClipboard = () => {
        navigator.clipboard.writeText("Heroes-V-online@yandex.ru");
        setClipboardCheck(true);
    }

    if(clipboardCheck){
        setTimeout(()=>{
            setClipboardCheck(false)
        }, 5000)
    }
    return(
        <Wrapper>
            <WrapperGrid>
                <img className="label" src="/images/icon.svg" alt="label" />
                <LinkButton fs="16px" fh="18px" className='bot'><a>Персонажи</a></LinkButton>
                <LinkButton fs="16px" fh="18px" className='bot'><a>Авторы</a></LinkButton>
                <LinkButton fs="16px" fh="18px" className='bot'><a>Как подключиться</a></LinkButton>
                <Button onClick={()=>props.setDownloadPopup(true)}><div>Скачать</div></Button>
                <LinkButton fs="16px" fh="18px" className='eMail' ><img className='icon' src='/images/mail_icon.svg' /><a onClick={toClipboard}><div className="" onClick={toClipboard}>Heroes-V-online@yandex.ru</div></a></LinkButton>
                <LinkButton fs="16px" fh="18px" className='top'><a>Карты</a></LinkButton>
                <LinkButton fs="16px" fh="18px" className='top'><a>Новости</a></LinkButton>
                <div className='top'><a><img className='icon' src="/images/discord_icon.svg"/></a><a><img className='icon' src="/images/vk_icon.svg" /></a></div>
            </WrapperGrid>
            <Copied isShow={clipboardCheck}>Скопировано</Copied>
            <Underline>
                <div className="">Heroes V Online © Copyright 2022 All rights reserved</div>
                <div className="">Designed by <a href='https://www.behance.net/osavosko'>osavosko</a></div>
            </Underline>
        </Wrapper>
    )
}