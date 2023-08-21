import { Col, } from "antd"
import { ProfileImg, UiSubTitle } from "../styles"
import { Content } from "antd/es/layout/layout"
import { AuthorHeaderContainer, StyledCol, StyledRow, Time } from "./styles"
import { ProfileName } from "../Profile/styles"

export const AuthorHeader = () => {
  return (
    <AuthorHeaderContainer>
    <StyledRow>
      <Col>
      <ProfileImg src="https://github.com/pauloSoaf.png"/>
      </Col>
      <StyledCol>
      <ProfileName>Paulo Amorim</ProfileName>
      <UiSubTitle>Software Developer</UiSubTitle>
      </StyledCol>
    </StyledRow>
    <StyledRow>
      <StyledCol><Time title="21 de agosto de 2023 ás 7:01" dateTime="2023-08-21 07:01:59">Publicado há 1h</Time></StyledCol>
    </StyledRow>
      </AuthorHeaderContainer>
  )
}