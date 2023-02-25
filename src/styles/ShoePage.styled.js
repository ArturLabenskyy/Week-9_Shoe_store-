import styled from "styled-components";

const Wrapped = styled.section`
    height: 100%;

    .shoe-page {
        height: 60%;
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem auto;
        background-color: #c0eef2;
        border-radius: 7px;
    }

    img {
        height: 100%;
        width: 40%;
        border-radius: 7px;
    }
`;

export default Wrapped;
