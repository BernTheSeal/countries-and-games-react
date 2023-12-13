import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div.details {
        border-radius: 10px;
        width: 1300px;
        height: 550px;
    }

    img {
        border-radius: 10px;
        width: 250px;
        height: 150px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    
    div.flag {
        display: flex;
        height: 150px;
    }

    div.name {
        background-color: rgb(252,252,252);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        width: 100%;
        margin-left: 30px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        font-size: 25px;

        div.wiki {
            display: flex;
            flex-direction: column;
            margin-right: 40px;
            color: gray;
            
            &:hover i  {
                color: black;
                transition: all .2s ease;
            }

            &:hover p {
                color: black;
                transition: all .2s ease;
            }

            p {
                font-size: 12px;
            }
        }

        a {
            font-size: 40px;
            transition: all .1s ease;
            color: gray;

            span {
                font-size: 12px;
            }
        }

        p {
            color: gray;
        }
    }

    div.info {
        background-color: rgb(252,252,252);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        border-radius: 10px;
        margin-top: 30px;
        height: 370px;   
        display: flex;
        overflow: hidden;
    }

    div.languages {
        height: 100%;
        width: 20%;
        padding: 20px;
        position: relative;
        overflow: hidden;
        border-right: 1px solid rgb(230,230,230);
        font-size: 17px;
        z-index: 2;

        div {
            margin-top: 10px;
            z-index: 2;
            position: absolute;
            font-weight: 300;
        }

        i {
            color:  rgb(230,230,230);
            font-size: 180px;
            position: absolute;
            bottom: -40px;
            right: -50px;
            z-index: 1;
        }
    }

    div.population {
        height: 100%;
        width: 20%;
        position: relative;
        font-size: 17px;
        z-index: 2;

        div.population_value {
            position: relative;
            padding: 20px;
            height: 50%;
            border-right: 1px solid rgb(230,230,230);
            border-bottom: 1px solid rgb(230,230,230);
            overflow: hidden;

            p {
                margin-top: 10px;
                font-weight: 300;
                z-index: 2;
                position: absolute;
            }

            i {
                color:  rgb(230,230,230);
                font-size: 180px;
                position: absolute;
                bottom: -40px;
                right: -20px;
                z-index: 1;
            }
        }

        div.population_rank {
            position: relative;
            padding: 20px;
            height: 50%;
            border-right: 1px solid rgb(230,230,230);
            overflow: hidden;

            p {
                font-size: 35px;
                font-weight: 300;
                font-style: italic;
                margin-top: 10px;
                z-index: 2;
                position: absolute;
            }

            i {
                color:  rgb(230,230,230);
                font-size: 160px;
                position: absolute;
                bottom: -40px;
                right: -30px;
                z-index: 1;
            }
        }
    }

    div.regions {
        height: 100%;
        width: 20%;
        position: relative;
        font-size: 17px;
        z-index: 2;

        div.region {
            position: relative;
            padding: 20px;
            height: 50%;
            border-right: 1px solid rgb(230,230,230);
            border-bottom: 1px solid rgb(230,230,230);
            overflow: hidden;

            p {
                margin-top: 10px;
                font-weight: 300;
                z-index: 2;
                position: absolute;
            }

            i {
                color:  rgb(230,230,230);
                font-size: 180px;
                position: absolute;
                bottom: -40px;
                right: -60px;
                z-index: 1;
            }
        }

        div.subregion {
            position: relative;
            padding: 20px;
            height: 50%;
            border-right: 1px solid rgb(230,230,230);
            overflow: hidden;

            p {
                position: absolute;
                margin-top: 10px;
                font-weight: 300;
                z-index: 2;
            }

            i {
                color:  rgb(230,230,230);
                font-size: 160px;
                position: absolute;
                bottom: -40px;
                right: -40px;
                z-index: 1;
            }
        }
    }

    div.independent-week {
        height: 100%;
        width: 20%;
        position: relative;
        font-size: 17px;
        z-index: 2;

        div.independent {
            position: relative;
            padding: 20px;
            height: 50%;
            border-right: 1px solid rgb(230,230,230);
            border-bottom: 1px solid rgb(230,230,230);
            overflow: hidden;

            p {
                margin-top: 10px;
                font-weight: 300;
                z-index: 2;
                position: absolute;

                i {
                    color: black;
                    font-size: 30px;
                    top: 5px;
                    left: 0px;
                }
            }

            i {
                color:  rgb(230,230,230);
                font-size: 180px;
                position: absolute;
                bottom: 5px;
                right: -80px;
                z-index: 1;
            }
        }

        div.start-of-week {
            position: relative;
            padding: 20px;
            height: 50%;
            border-right: 1px solid rgb(230,230,230);
            overflow: hidden;

            p {
                position: absolute;
                margin-top: 10px;
                font-weight: 300;
                z-index: 2;
            }

            i {
                color:  rgb(230,230,230);
                font-size: 160px;
                position: absolute;
                bottom: -40px;
                right: -40px;
                z-index: 1;
            }
        }        
    }

    div.currencies {
        height: 100%;
        width: 20%;
        padding: 20px;
        position: relative;
        overflow: hidden;
        font-size: 17px;
        z-index: 2;

        div {
            margin-top: 10px;
            z-index: 2;
            position: absolute;
            font-weight: 300;
        }

        i {
            color:  rgb(230,230,230);
            font-size: 180px;
            position: absolute;
            bottom: -30px;
            right: -30px;
            z-index: 1;
        }
    }
`