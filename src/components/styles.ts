import { Button, Divider, Layout, Typography } from "antd";
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
    font-weight: 600;
    &:hover {
        background: #00875F;
        color: #fff !important;
        border: 1px solid #00875F !important;
    }
`;
export const UiDivider = styled(Divider)`
    background: #323238;
`;
export const ProfileImg = styled.img`
  box-sizing: initial;
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  border: 4px solid #202024;
  outline: 2px solid #00B37E;
  margin-top: calc(0px - 2rem - 6px);
  margin-bottom: 1rem;
  `;
