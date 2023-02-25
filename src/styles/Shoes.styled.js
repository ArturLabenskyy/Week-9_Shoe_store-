import styled from "styled-components";

const Wrapped = styled.section`
    height: 100%;
    flex-direction: column;

    .shoes-table {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 70%;
        height: 80%;
        background-color: #e9f8f9;
    }
`;

export default Wrapped;
