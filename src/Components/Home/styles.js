import styled from 'styled-components';

export const Container = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #138496;
    margin-bottom: 10px;
    position: fixed;
    top: 0;
    width: 100%;
`

export const Li = styled.li`
    float: right;
    background-color: #ff3333;
    a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    a:hover:not(.active) {
        background-color: #111;
    }
`

