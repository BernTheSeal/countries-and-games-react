import styled from "styled-components";

export const Body = styled.div`
    padding: 0 200px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 45px;

        i {
            margin-right:20px;
        }
    }
    div {
        i {
            font-size:35px;
        }
    }

    a {
        color:gray;
        transition: all .2s ease;

        &:hover {
            color: black;
        }
    }
`
export const Games = styled.div `
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        border-radius: 10px; 
        border: 1px solid white;  
        justify-content: space-between;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 35px;
        margin-top: 30px;
        cursor: pointer;
        transition: all .3s ease;
        color: gray;
        position: relative;
        
        &:hover {
            color: black;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        }

        p.high-score {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            position: absolute;
            top: 20px;
            right: 500px;
        }

    }

`