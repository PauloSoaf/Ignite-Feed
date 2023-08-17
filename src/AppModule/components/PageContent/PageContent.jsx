import { Col, Row } from "antd"
import { Profile } from "../../../components/Profile/Profile"
import { Feed } from "../../../components/Feed/Feed"
import { PageRow } from "./styles"

export const PageContent = () => {
    return (
        <PageRow align='top'>
            <Col><Profile/></Col>
            <Col><Feed/></Col>
        </PageRow>
    )
}