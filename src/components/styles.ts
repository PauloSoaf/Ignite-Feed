import { Button, Layout, Typography } from "antd";
import { styled } from "styled-components";

export const AppLayout = styled(Layout)`
    min-height: 100%;
    background-color: #121214;
    margin: 0; 
    color: #E1E1E6;
`;
export const UiTitle = styled(Typography.Text)`
    font-size: 1.5rem;
    color: #E1E1E6;
    font-weight: 600;
`;
export const UiSubTitle = styled(Typography.Text)`
    font-size: 0.875rem;
    color: #8D8D99;
`;
export const UiButton = styled(Button)`
    background: none;
    color: #00B37E;
    border: 1px solid #00B37E;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    width: 12rem;
    height: 50px;
    justify-content: center;
    font-size: 16px;
    margin: 0;
`;
