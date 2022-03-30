import Link from 'next/link';
import styled from 'styled-components';


const Wrapper = styled.div`

`

export const LinkButton = styled.div <{fs: string, fh: string}>`
    color: white;
    a{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: ${props => props.fs};
        line-height: ${props => props.fh};
        letter-spacing: 0.5px;
        color: #FFFFFF;
        
        cursor: pointer;

        transition: 0.3s;
        &:hover{
            color: #BEAB8D;
        }
        &:active{
            color: #F9A70E; 
        }
    }

    
    
`

interface Props{
    text: string;
}

export const HeaderButton = (props:Props) => {
    return(
        <Wrapper>
            <Link href="/heroes"><LinkButton fs="18px" fh="21px"><a>{props.text}</a></LinkButton></Link>
        </Wrapper>
    )
}

