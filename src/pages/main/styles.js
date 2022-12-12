import styled from "styled-components";

export const MainPage = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    position: relative;
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 36px;
    row-gap: 44px;
    margin-top: 52px;
`

export const MainTitle = styled.h1`
    width: 830px;
    height: 110px;
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 55px;
    letter-spacing: -1.16878px;
    color: #F4F4FF;
    margin-top: 18px;
`

export const SaleStickerBox = styled.div`
    width: 212px;
    height: 152px;
    position: absolute;
    top: 20px;
    right: -45px;
    background-image: url('/assets/img/sale-sticker.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const MainButtonBox = styled.div`
    width: 147px;
    height: 48px;
    margin: 0 auto;
    margin-top: 34px;
`