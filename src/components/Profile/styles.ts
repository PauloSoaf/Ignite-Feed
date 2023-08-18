import { Card, Typography } from "antd";
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

export const BackgroundImg = styled.img`
  width: 100%;
  height: 4.5rem;
  object-fit: cover;
`;
export const ProfileName = styled(Typography.Text)`
  font-size: 1rem;
  color: #E1E1E6;
  `;
  export const ProfileSubTitle = styled(Typography.Text)`
  font-size: 0.875rem;
  color: #8C8C8C;
`;