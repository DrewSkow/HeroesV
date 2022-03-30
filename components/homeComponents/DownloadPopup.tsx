import styled from 'styled-components';

const Wrapper = styled.div<{isActive:boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);

    display: ${props=>props.isActive?"block":"none"};

    a{
        text-decoration: none;
    }
`

const Field = styled.div`
        width: 550px;
        margin: 0 auto;
        padding: 50px;
        position: fixed;
        top: 35%;
        left: calc(52.5% - 370px);
    
        box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
        border-radius: 5px;
    
        background: #211E19;
`

const Cross = styled.div`
    position: absolute;
    top: 23px;
    right: 23px;
    cursor: pointer;
`

const Header = styled.h2`
    text-align: center;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #F7F2E9;
    margin: 0 0 25px 0;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #BEAB8D;
    padding-bottom: 15px;
    margin-top: 15px;

    img{
        margin-right: 15px;
    }

    p{
        display: flex;
        align-items: center;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: white;

    }

`

const DownloadButton = styled.div`
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #BEAB8D;

    padding: 10px 20px;

    border: 1px solid #BEAB8D;
    filter: drop-shadow(0px 0px 10px rgba(249, 167, 14, 0.5));
    border-radius: 5px;
    background:none;

    cursor:pointer;

    &:hover{
        background: rgba(190, 171, 141, 0.1);
    }

    &:active{
        background: #F9A70E;
        color: black;
    }
`

interface Prop{
    downloadPopup: boolean;
    setDownloadPopup: (v:boolean)=>void; 
}

export const DownloadPopup = (props: Prop) => {
    return(
        <Wrapper isActive={props.downloadPopup}>
            <Field>
                <Cross onClick={()=>props.setDownloadPopup(false)}><img src="/images/cross.svg" alt="cross" /></Cross>
                <Header>Выберите вариант скачивания</Header>
                <Item>
                    <p>
                        <img src="/images/torrent_icon.svg" />
                        Торрент
                    </p>
                    <a target="_blank" href="https://freetp.org/po-seti/4537-heroes-v-online-geroi-mecha-i-magii-5-po-seti.html">
                        <DownloadButton>Скачать</DownloadButton>
                    </a>
                </Item>
               
                <Item>
                    <p>
                        <img src="/images/googleDrive_icon.svg" />
                        Google Drive
                    </p>
                    <a target="_blank" href="https://drive.google.com/file/d/1yuv_ueaNVI3pSRblVwX0k0M6tFIo04YV/view?usp=sharing">
                        <DownloadButton>Скачать</DownloadButton>
                    </a>
                </Item>

                <Item>
                    <p>
                        <img src="/images/yandexDisk_icon.svg" />
                        Яндекс.Диск
                    </p>
                    <a target="_blank" href="https://disk.yandex.ru/d/_VRrkX6R9m8u-A">
                        <DownloadButton>Скачать</DownloadButton>
                    </a>
                </Item>
            </Field>
        </Wrapper>
    )
}