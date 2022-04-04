import styled from 'styled-components';
import Head from "next/head";
import { useState} from "react";
import { DownloadPopup } from "./homeComponents/DownloadPopup";
import { Footer } from "./homeComponents/Footer"
import { Header } from "./homeComponents/Header"

const Wrapper = styled.div`
    position: relative;
    width:100%;
    padding-top:85px;
    height: 100%;
    background-color: #1B1914;
    z-index: 0;
`


export const Layout = ({ children }:any) => {

    const [downloadPopup, setDownloadPopup] = useState<boolean>(false);

    return(
        <>
        <Head>
            <link href="/fonts/ANTQUAI.TTF" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
        </Head>
        <Wrapper>
            <Header setDownloadPopup={setDownloadPopup} />
            <main>
                {children} 
            </main>
            <Footer setDownloadPopup={setDownloadPopup} />
        </Wrapper>
        <DownloadPopup downloadPopup={downloadPopup} setDownloadPopup={setDownloadPopup} />
        </>
    )
}

