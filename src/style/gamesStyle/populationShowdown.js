import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    div.vs {
        background-color: black;
        color: white;
        width: 125px;
        height: 125px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
    }

    div.score {
        font-size: 20px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-weight: 300;
        
        span {
            font-weight: 400;
        }
    }
    
    p.icon {
        position: absolute;
        left: 50px;
        i {
            font-size: 20px;
        }
    }
    
    div.info {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }

    div.population {
        margin-top: 50px;
        font-size: 80px;
        font-style: italic;
        font-weight: 300;
    }

    h2 {
        font-size: 30px;
        font-weight: 300;
        color: gray;
    }

    div.countries {
        width: 50%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: transform 0.5s ease; 
    }
        
    div.country-a {
        border-right: 1px solid black;
    }

    img {
        width: 240px;
        height: 150px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-bottom: 20px;
    }

    div.buttons {
        margin-top: 40px;
        width: 400px;
        
        div {
            cursor: pointer;
            border: 1px solid black;
            height: 60px;
            width: 200px;
            margin-top: 15px;
            border-radius: 10px;
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            position: relative;
            font-size: 19px;
            transition: all .1s ease;
        }

        div.isClickTrue {
            &:hover {
                background-color: white;
                color: black;
            }
        }

        div.isClickFalse {
            &:hover {
                background-color: black;
                color: white;
            }
        }
    }

    div.game-over-container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        
        div.game-over-info {
            border: 2px solid black;
            width: 1000px;
            height: 550px;
            display: flex;
            flex-direction: column;
            align-items: center;
        
            div.game-over {
                font-weight: 600;
                width: 100%;
                background-color: black;
                padding: 20px;
                font-size: 40px;
                color: #CA4545;
                display: flex;
                justify-content: center;
            }

            div.last-countries {
                margin-top: 40px;
                width: 800px;
                display: flex;
                justify-content: space-around;
                font-size: 20px;
                font-weight: 300;

                span {
                    font-weight: 400;
                }
                
                div {
                    display: flex;
                    flex-direction: column;
                    align-items:center;
                }

                img {
                    width: 200px;
                    height: 120px;
                }
            }

            div.game-over-score {
                margin-top: 20px;
                width: 800px;
                display: flex;
                justify-content: center;
                font-size: 30px;
                font-weight: 300;

                span {
                    font-weight: 400;
                    font-size: 34px;
                    margin-left: 10px;
                }
                
            }

            div.game-over-buttons {
                margin-top: 30px;
                width: 700px;
                display: flex;
                justify-content: space-between;

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
        }
    }
`
