import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 140px;
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
`

export const LeftBox = styled.div`
    width: 50%;
    height: 116px;
    position: relative;
`

export const HeaderText = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    opacity: 0.5;
`