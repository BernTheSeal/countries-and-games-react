import styled from "styled-components";

export const Background = styled.div`
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Worldmap-blank.svg/1199px-Worldmap-blank.svg.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh; 
    
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8;
    }
`
export const Body = styled.div`
    padding: 50px 200px;
    height: 100vh;
    z-index:1;
    position:relative;
    
    div.flag-div {
        height: 20vh;
        display: flex;
        
        img {
            
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        
        h3 {
            font-size: 50px;
        }

        p {
            font-size: 30px;
            color: gray;
        }

        div {
            padding: 15px 40px;
        }
    }

    div.country-info {
        height: 430px;
        gap: 10px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 90px;
        
        div {
            height: 100px;
            width: 200px;
            
            h4 {
                font-size:30px;
                margin-bottom: 10px;
            }

            p {
                color:gray;
                font-size: 17px;
            }

            i {
                font-size: 15px;
            }  
        }       
    }
`