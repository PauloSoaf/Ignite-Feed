import { Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const ProfileCard = styled(Content)`
    border-radius: 8px;
    background: #202024;
    width: 16rem;
    height: 18.375rem;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;
export const ProfileImg = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 8px;
    border: 4px solid #202024;
    outline: 2px solid #00B37E;
    margin-top: -2rem;
`;