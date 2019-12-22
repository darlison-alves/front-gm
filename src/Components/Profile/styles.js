import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  
`

export const ContainerList = styled.div`
    margin-left: 30px;
    float: right
    max-width: 672px;
`;

export const ContainerCardList = styled.div`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    
`;

export const ContainerListText = styled.h5`
    margin: 0;
    line-height: 1;
    padding-bottom: 0.2rem;
    font-size: 1.25rem;
`

export const ContainerListTextHeader = styled.h5`
    margin: 0;
    line-height: 1;
    padding-bottom: 0.2rem;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 20px;
`

export const ContainerListCard = styled.div`
    flex-wrap: wrap;
    align-items: center;
    --spacer: 1em;
    background-color: white;
    padding: var(--spacer);
    border-radius: calc(var(--spacer)/3);
    box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 10px;
    width: 200px
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
    background: #fff;
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
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
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