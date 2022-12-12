import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: ${props => props.$main ? '#271A58' : '#FAFAFA'};
    padding: 0px 140px;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: transparent;
    display: flex;
    flex-direction: column;
`