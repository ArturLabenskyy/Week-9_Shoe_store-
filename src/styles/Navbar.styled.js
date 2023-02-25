import styled from "styled-components";

const Wrapped = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    background-color: #c0eef2;

    .navbar-logo {
        height: 80%;
        width: 5%;
        margin: 1rem;
    }

    .buttons {
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    h2 {
        margin: auto;
    }

    .add-new-shoe {
        margin: auto;
    }

    .add-link {
        width: 10rem;
        height: 2.5rem;
    }
`;

export default Wrapped;
