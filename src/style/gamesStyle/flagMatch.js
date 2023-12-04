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
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
export const ContainerGameOver = styled.div`
    border: 2px solid black;
    width: 1000px;
    height: 550px;

    div.game-over {
        font-weight: 600;
        background-color: black;
        padding: 20px;
        font-size: 40px;
        color: #CA4545;
        display: flex;
        justify-content: center;
    }

    div.country-info {
        font-weight: 300;
        margin-top: 20px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;

        img {
            margin-left: 20px;
            height: 140px;
            width: 220px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }

    div.score {
        font-weight: 300;
        margin-top: 20px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px; 
    }

    div.buttons {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        div {
            font-family: 'Roboto Condensed', sans-serif;
            padding: 20px;
            width: 200px;
            font-size: 20px;
            font-weight: 400;
            border-radius: 20px;
            background-color: rgb(235,235,235);
            cursor: pointer;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .1s ease;

            &:hover {
                background-color: black;
                color: white;
                
            }

            &:hover i {
                color: white;
            }

            i {
                font-size: 15px;
                margin-right: 10px;
            }
        }
    }
`