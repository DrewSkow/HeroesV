import styled from 'styled-components'; 

const Wrapper = styled.div`
  position: relative;
    & video{
      width: 100vw;
    }
`;

const LabelText = styled.div`
  position: absolute;
  top: calc(50vh - 200px);
  left: calc(50% - 375px);
  
  background: rgba(33, 30, 25, 0.6);
  box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);

  border-radius: 5px;

  width: 666px;
  height: 242px;
  font-family: 'Antiqua';
  font-style: italic;
  color: white;

  & h2{
    margin-top: 50px;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 36px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.02em;
  }

  & p{
    margin-top: 15px;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
  }
`

export const Video = () => {
    return(
        <Wrapper>
          <video src="/images/video.mp4" autoPlay muted loop></video> 
            <LabelText>
                <h2>Heroes V Online <br/> модификация оригинальной <br/> Heroes of Might and Magic </h2>
                <p>Окунитесь с головой в мир Асхана вместе с Heroes V online</p>
            </LabelText>
        </Wrapper>
    )
}