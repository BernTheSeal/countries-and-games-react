import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    position: relative;
`
export const Flags = styled.div`
    height: 50%;
    width: 50%;
    cursor: pointer;
    
    div {        
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border: 1px solid rgb(240,240,240);
        transition: all .3s ease;
        
        &:hover {
            background-color: ${({ isFlagClickable }) => {
                return isFlagClickable ? 'rgb(240,240,240)' : 'white';
            }};
        }

        img {
            height: 140px;
            width: 220px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
`
export const Tittle = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ titleColor}) => {
        if (titleColor === 'black') {
            return 'black'
        } else if ( titleColor === 'green') {
            return '#61C25E'
        } else {
            return '#CA4545'
        }
    }};

    color: white;
    padding: 10px;
    font-size: 20px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`
export const Board = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    position: absolute;
    top: 56.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;

    div {
        border: 1px solid black;
        padding: 10px;
        color: black;
        width: 120px;
        display: flex;
        justify-content: center;
    }

`
export const GameOver = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    z-index: 1;
`