import styled from "styled-components";

export const GamePageContainer = styled.div`
    height: 100vh;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/world_map.PNG') center/cover no-repeat;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: -1;
    }

    div.subregions-buttons {
        position: relative;
        width: 100%;
        height: 100%;
    }

    div.subregion {
        width: 12px;
        height: 12px;
        border: 2px solid black;
        background-color: black;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            background-color: transparent;

            &:before {
                content: attr(data);
                position: absolute;
                top: -35px;
                left: 50%;
                width: auto;
                transform: translateX(-50%);
                background-color: black;
                color: white;
                font-size: 13px;
                border-radius: 5px;
                justify-content: center;
                width: 100px;
                padding: 5px;
                display: flex;
                z-index: 1;
            }
        }
    }

    div.country-info {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 30px;
        left: 30px;
        

        img {
            width: 140px;
            height: 80px;
            border-radius: 15px;
            border: 3px solid black;
        }

        p {
            font-size: 20px;
            margin-left: 5px;
        }
    }

    div.score {
        font-size: 20px;
        position: absolute;
        bottom: 120px;
        left: 32px;
    }

    div.westernafrica {
        left: 650px;
        top: 350px;
    }

    div.easternasia {
        right: 350px;
        top: 220px;
    }

    div.westernasia {
        top: 260px;
        left: 860px;
    }

    div.caribbean {
        left: 320px;
        top: 310px;
    }

    div.easternafrica {
        left: 830px;
        bottom: 260px;
    }

    div.polynesia {
        right: 50px;
        bottom: 150px;
    }

    div.southeasteurope {
        left: 770px;
        top: 190px;
    }

    div.south-easternasia {
        right: 280px;
        bottom: 300px;
    }

    div.centralamerica {
        left: 250px;
        top: 340px;
    }

    div.southamerica {
        left: 380px;
        bottom: 210px;
    }

    div.northerneurope {
        left: 750px;
        top: 90px;
    }

    div.southernasia {
        right: 490px;
        top: 280px;
    }

    div.australiaandnewzealand {
        right: 120px;
        bottom: 100px;
    }

    div.northernafrica {
        left: 720px;
        top: 260px;
    }

    div.middleafrica {
        left: 750px;
        bottom: 300px;
    }

    div.micronesia {
        right: 150px;
        bottom: 320px;
    }

    div.northamerica {
        left: 220px;
        top: 200px;
    }

    div.southerneurope {
        left: 740px;
        top: 200px;
    }
    
    div.southernafrica{
        left: 780px;
        bottom: 150px;
    }

    div.centralasia {
        right: 580px;
        top: 190px;
    }

    div.easterneurope{
        left: 820px;
        top: 150px;
    }

    div.westerneurope {
        left: 670px;
        top: 180px;
    }

    div.melanesia {
        right: 100px;
        bottom: 200px;
    }

    div.centraleurope {
        left: 750px;
        top: 160px;
    }

    div.undefined {
        display: none;
    }
`

export const GameOverContainer = styled.div`
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

            div.country {
                div {
                    margin-top: 60px;
                    font-size: 30px;
                    font-weight: 300;
                }
            }
        
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

            div.country {
                margin-top: 40px;
                width: 800px;
                display: flex;
                justify-content: space-around;
                font-size: 20px;
                font-weight: 300;

                img {
                    width: 200px;
                    height: 120px;
                }
            }

            div.game-over-score {
                margin-top: 60px;
                margin-bottom: 60px;
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