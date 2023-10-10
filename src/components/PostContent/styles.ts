import { Input, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const Paragraph = styled(Typography.Paragraph)`
  color: white;
`;
export const Link = styled.a`
  color: #00B37E !important;
  &:hover {
    color: #00875F !important;
  }
`;
export const TextArea = styled(Input.TextArea)`
  background: #121214;
  color: #C4C4CC;
  border: none;
  min-height: 5rem;
  &::placeholder {
    color: #7C7C8A;
    font-size: 1rem;
    margin: 5rem;
  }
  &:focus {
    border: 0;
    box-shadow: #00B37E 0px 0px 0px 1px inset;
  }
`;
export const UiFooter = styled(Footer)`
  padding: 0;
  background: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;