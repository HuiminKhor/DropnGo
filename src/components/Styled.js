import styled from 'styled-components'

const SearchBarDiv = styled.div `
    padding: 20px;
    display: flex;
    justify-content: center;
    align-content: center;

    + Select {
        width: 50px;
    }

    + button {
        background-color: black;


    }

`

export {SearchBarDiv}