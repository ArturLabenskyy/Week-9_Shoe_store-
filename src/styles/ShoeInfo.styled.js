import styled from "styled-components";

const Wrapped = styled.section`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .buttons-container {
        width: 70%;
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    a {
        width: 20%;
        margin: auto;
    }

    button {
        width: 30%;
        margin: auto;
    }
`;

export default Wrapped;
