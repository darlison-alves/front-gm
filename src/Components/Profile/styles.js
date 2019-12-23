import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 30vh;
  
`

export const ContainerMenu = styled.div`
    color: #000!important;
    background-color: #f1f1f1!important;
    height: 100%;
    width: 25%;
    background-color: #fff;
    position: fixed!important;
    z-index: 1;
    overflow: auto;
`

export const ContainerList = styled.div`
    margin-left: 25%;
    float: left
    max-width: 672px;    
`;

export const ContainerChildren = styled.div `
    padding: 0.01em 16px;
    color: #fff!important;
    background-color: #138496!important;
    padding: 20px 10px;
    
`

export const ContainerChildren2 = styled.div `
    padding: 0.01em 16px;    
`

export const ContainerCardList = styled.div`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    float: left;        
`;

export const ContainerCardListText = styled.div`
display: block;
outline: 0;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;    
`;

export const ContainerListText = styled.h5`
    margin: 0;
    line-height: 1;
    font-size: 1.25rem;
    display: inline-block;
    outline: 0;
    
`

export const ContainerListTextRigth = styled.h4`    
    line-height: 1;
    font-size: 1.25rem;
    float: right;
    display: inline-block;
    outline: 0;
`

export const ContainerListTextHeader = styled.h5`
    margin: 0;
    line-height: 1;
    padding-bottom: 0.2rem;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const ContainerListCard = styled.div`
    flex-wrap: wrap;
    align-items: center;
    --spacer: 1em;
    background-color: white;
    padding: var(--spacer);
    
    box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 10px;
    width: 400px
`

export const ContainerListCardHeader = styled.div`
    color: #D32F2F;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid #EF9A9A;
    background-color: #FFEBEE;
    padding: 5px 10px;
`

export const ContainerListCardMain = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;    
    padding: 15px 0;   
`

export const ProfileUserpic = styled.div`

    width: 400px;
    
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        float: none;
        margin: 10px auto;
        width: 50%;
        height: 50%;
        -webkit-border-radius: 50% !important;
        -moz-border-radius: 50% !important;
        border-radius: 50% !important;
        padding: .25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: .25rem;
        max-width: 100%;
        height: auto;
    }    
   
    p {
        color: #138496;
        margin-bottom: 15px;
        border: 1px solid #138496;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input {
        flex: 1;
        height: 46px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        &::placeholder {
        color: #999;
        }
    }
    button {
        color: #fff;
        font-size: 16px;
        background: #fc6963;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
    
`
export const ButtonSair = styled.button`
    background-color: "#ff3333";
    display: inline-block;
    margin-right: 0vw;
    font-size: 20px;
    text-align: center;   
    float: right
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const TextHeader = styled.h2`
    display: inline-block;
`