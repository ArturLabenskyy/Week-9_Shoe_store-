import styled from "styled-components";

const Wrapped = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;

    .new-shoes {
        height: 80%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        background-color: #c0eef2;
        border-radius: 7px;
    }

    .buttons-container {
        width: 30%;
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    button {
        margin: auto;
    }
`;

export default Wrapped;
