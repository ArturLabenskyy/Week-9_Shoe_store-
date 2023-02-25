import styled from "styled-components";

const Wrapped = styled.section`
    height: 100%;
    flex-direction: column;

    .shoes-table {
        margin: 1rem auto;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: repeat(3, auto);
        width: 70%;
        height: 80%;
        background-color: #c0eef2;
        border-radius: 7px;
    }

    h1 {
        grid-column: 1 / 4;
        width: 70%;
        height: 15%;
        margin: auto;
        text-align: center;
    }
`;

export default Wrapped;
