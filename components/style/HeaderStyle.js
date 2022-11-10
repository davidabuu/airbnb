import styled from "styled-components"
export const HeadingStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0 5rem;
    .bnb {
        color: #fff;
    }
    ul,
    .host-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            padding-right: 30px;
        }
    }
    ul {
    }
    li {
        padding-left: 35px;
        font-size: 17px;
        cursor: pointer;
    }
    .profile {
        background: #fff;
        cursor: pointer;
        height: 25px;
        transform: translateY(-5px);
        border-radius: 5px;
    }
    .profile-info {
        background: #fff;
        padding: 10px;
        position: absolute;
        width: 120px;
        transform: translate(30px, 100px);
        visibility: visible;
        transition: all 0.5s ease;
        ul {
            display: block;
            transition: all 0.5s ease;
        }
    }
    .hide {
        display: none;
        transition: all 0.5s ease;
        ul {
            display: block;
            transition: all 0.5s ease;
        }
    }
`
