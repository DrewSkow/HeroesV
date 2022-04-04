import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: 'Ubuntu';
    font-style: normal;
    color: #fff;

    &>h2{
        font-family: 'Antiqua';
        font-style: italic;
        font-weight: 700;
        font-size: 36px;
        line-height: 35px;
        text-align: center;
        color: #F7F2E9;
        margin: 90px 0 10px;
        padding: 0;
    }
`

const FieldWrapper = styled.div`
    background: rgba(33, 30, 25, 0.5);
    box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border-radius: 5px;

    padding: 30px 105px 35px;
    margin: 30px auto 0 auto;

    position: relative;
    z-index: 10;
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    padding: 0;
    margin: 0;
`

const Content = styled.div`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;

`

const Button = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #BEAB8D;
    text-align:center;

    border: 1px solid #BEAB8D;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 10px rgba(249, 167, 14, 0.5));
    border-radius: 5px;

    max-width: 180px;
    max-height: 50px;

    padding: 13px 0;
    margin-top: 20px;
    
    &:hover{
        background: rgba(190, 171, 141, 0.1);
    }
    
    &:active{
        background: #F9A70E;
        color: #000;
    }

    cursor: pointer;
`

const ServersName = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const Server = styled.div`
    font-weight: normal;
    font-size: 18px;
    line-height: 119.4%; 
    color: #F9A70E;
`

const Notic = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    margin-top: 15px;
`

const Light = styled.div<{isLeft:boolean}>`
    
    position: absolute;
    z-index: -1;
    top: 0;
    ${props => props.isLeft? "left: 0;" : "right: 0;"}
    width: 215px;
    height: 198px;

    background: #F9A70E;
    opacity: 0.2;
    filter: blur(70px);
    border-radius: 139px;
    cursor: pointer;
`

const Align = styled.div`
        max-width: 790px;
        max-height: 210px;
        margin: 0 auto;

        position: relative;
        z-index: 0;
`

export const ConnectComponent = () => {
    return(
        <Wrapper>
            <h2>Чтобы  играть онлайн с другими игроками</h2>
            <Align>
                <FieldWrapper>
                    <Title>Скачать RADMIN VPN</Title>
                    <Content>Откройте Radmin VPN и нажмите на вкладку сеть, выбираете пункт «присоединиться к существующей»</Content>
                    <Link href="https://www.radmin-vpn.com/ru/"><Button>Скачать</Button></Link>
                    
                </FieldWrapper>
                <Light isLeft={true} />
                </Align>
                <Align>
                <FieldWrapper>
                    <Title>Во вкладке «частная сеть» написать имя одного из серверов:</Title>
                    <ServersName>
                        <Server>Heroes-V-Online</Server>
                        <Server>Heroes-V-Online№2</Server>
                        <Server>Heroes-V-Online№3</Server>
                    </ServersName>
                    <Content>
                        Пароль: Heroes
                    </Content>
                    <Notic> Можно зайти на все сервера, если есть место </Notic>
                    <Light isLeft={false} />
                </FieldWrapper>
                </Align>
                <Align>
                <FieldWrapper>
                    <Title>Игра</Title>
                    <Content>Cвернуть Radmin VPN и запустить игру. Войти в локальную сеть, где видны все игры сети, можно выбрать любую или создать свою</Content>
                    <Notic>Некорректные ники, содержащие оскорбления или нецензурные слова, удаляются из сети</Notic>
                    <Light isLeft={true} />
                </FieldWrapper>
                </Align>
                <Align>
                <FieldWrapper>
                    <Title>Поиск игроков</Title>
                    <Content>
                    На нашем сервере в Discord подключён бот поиска игроков, которые онлайн и также хотят найти, с кем можно поиграть
                    </Content>
                    <Link href="https://discord.gg/X6GAqTe"><Button>Присоединиться</Button></Link>
                    <Light isLeft={false} />
                </FieldWrapper>
                </Align>
        </Wrapper>
    )
}