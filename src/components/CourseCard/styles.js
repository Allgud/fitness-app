import styled from "styled-components";

export const CourseCard = styled.div`
    width: 360px;
    height: 480px;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
`

export const CourseTitle = styled.div`
    width: 290px;
    height: 120px;
    position: absolute;
    top: 30px;
    left: 30px;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #000000;
`

export const ButtonBox = styled.div`
    width: 140px;
    height: 45px;
    position: absolute;
    bottom: 30px;
    left: 30px;
`