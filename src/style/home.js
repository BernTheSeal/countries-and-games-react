import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Header = styled.div`
    padding: 0px 200px;
    border-bottom: 1px solid rgb(200, 200, 200);
    margin-top:50px;
    position: relative;
`
export const Tittle = styled.div`
    color:black;
    margin-bottom:30px;
    display:flex;
    align-items: center;

    h1 {
        font-size: 60px;
        margin-left: 25px;
    }

    i {
        font-size: 50px;
        animation:${rotate360}  10s linear infinite;
    }
`
export const SearchBar = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    position: relative;
    
    input{
        padding: 20px;
        padding-left: 50px;
        font-size: 1rem;
        outline: none;
        width: 60%;
        border: 1px solid white;
        background-color: rgb(245,245,245);
        border-radius: 10px;   
    }

    i {
        position: absolute;
        left:20px;
        top:18px;
        color: gray;
    }

    div {
        width: 150px;
        border: 1px solid black;
        background-color: black;
        color: white;
        font-size: 15px;
        border-radius: 10px;
        transition: all .3s ease;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: white;
            cursor: pointer;
            color: black;

            i {
                color: black;
            }
        }    

        i {
            position: absolute;
            left:30px;
            top:18px;     
            color: white;     
        }
    }
`
export const Filter = styled.div`
    border: 1px solid rgb(215,215,215);
    display: flex;
    font-size: 15px;
    width: 170px;
    position: absolute;
    top: 101px;
    right: 420px;
    height: 50px;
    font-weight: 400;
    color: rgb(100,100,100);

    div.default {
        display:flex;
        align-items: center;
        padding: 0 15px;
        justify-content: space-between;
        width: 100%;
        
        i {
            font-size: 10px;
        }
    }

    &:hover div.options {
        display: block;
        position: absolute;
        top:49px;
    }

    div.options {
        
        border: 1px solid rgb(215,215,215);
        border-top: none;
        display: none;
        background-color: white;
        width: 170px;

        div {
            width: 100%;
            padding: 10px;
            display: flex;
            align-items: center;

            &:hover {
                background-color: rgb(215,215,215);
                color: black;
            }

            &:hover i {
                color: black;
            }
        
            p {
                margin-left:5px;
            }

            i {
                font-size: 12px;
            }
        }
    }
`
export const Profile = styled.div`
    position: absolute;
    top: 10px;
    right: 200px;
    width: 80px;
    display:flex;
    justify-content: space-between;
    
    i {
        font-size: 32px;
        color: rgb(180,180,180);
        transition: all .2s ease;
    }

    i.fa-github:hover {
        color: #171515 ;
    }

    i.fa-linkedin:hover {
        color: #0077b5 ;
    }
`
export const List = styled.div`
    margin-top: 50px;
    padding: 0 200px;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;  
        row-gap: 15px;
    }

    li {
        width: 200px; 
        height: 280px; 
        display: flex;
        flex-direction: column;    
        border-radius: 10px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        margin-bottom: 50px;
        cursor: pointer;
        transition: all .3s ease;
        
        
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        div {
            height: 50%; 
            border-radius: 10px;
            padding: 15px;
            font-size: 14px;

            p {
                margin-top:5px;
                font-weight: 300
            }

            span {
                font-weight: 400
            }
        }
    }
`



