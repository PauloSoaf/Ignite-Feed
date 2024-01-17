import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";
import { Trash, ThumbsUp } from "phosphor-react";

export const CommentImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  `;
  export const CommentLayout = styled(Content)`
  display: flex;
  gap: 1rem;
  margin: 2rem 0 1.625rem 0;
  `;
export const CommentBox = styled(Content)`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #29292E;
  `;
export const CommentContent = styled(Content)`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #29292E;
  margin-bottom: 0.5625rem;
`;
export const CommentFooter = styled(Content)`
  display: flex;
  gap: 0.625rem;
  margin-top: 1rem;
  color: #8D8D99;
  font-weight: 700;
  font-size: 0.875rem;
  align-items: center;
  &:hover {
    color: #00B37E !important;
  }
  cursor: pointer;
  width: 8rem;
  height: 1.25rem;
  ::selection {
    background-color: transparent;
    color: 00B37E;
  }
`;
