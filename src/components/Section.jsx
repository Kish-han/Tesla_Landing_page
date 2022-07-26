import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p> {description} </p>
                </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    </Fade>
                    {rightBtnText &&
                    <Fade right>
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    </Fade>
                    }
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1{
        color: black;
        font-weight: 900;
        font-size: 40px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.98;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.85;
    color: black;
`

const DownArrow = styled.img`
    cursor: pointer;
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
    
`