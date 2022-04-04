import styled from 'styled-components';
import React from "react"
import { HeaderButton } from './HeaderButton';
import { HeaderDownloadButton } from './HeaderDownloadButton';
import Link from 'next/link';
import Image from 'next/image';

const Wrapper = styled.div`

    position:fixed;
    top:0;
    z-index:999;

    width:100%;
    background: #1B1914;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.29), inset 0px -4px 10px rgba(255, 255, 255, 0.1);
    padding: 10px 0;
`
const Content = styled.div`
    margin: 0 auto;
    max-width: 1180px;
    max-height:80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const ButtonWrapper = styled.div`
    display:flex;
    column-gap: 60px;

`
const Img = styled.div`
    cursor: pointer;
`
interface Props{
    setDownloadPopup: (v:boolean) => void;
}

export const Header = (props:Props) => {

    return (
        <Wrapper>
            <Content>
                <Link href="/"><Img><Image width='200px' height='60px' src='/images/icon.svg'/></Img></Link>
                <ButtonWrapper>
                    <HeaderButton url="/heroes" text="Герои" key="1" />
                    <HeaderButton url='/maps' text="Карты" key="2"/>
                    <HeaderButton url="/" text="Авторы" key="3"/>
                    <HeaderButton url='https://zen.yandex.ru/id/5f81e9feafcf672f1465cb3b' text="Новости" key="4"/>
                </ButtonWrapper>
                <HeaderDownloadButton setDownloadPopup={props.setDownloadPopup} />
            </Content>
        </Wrapper>
    )
}