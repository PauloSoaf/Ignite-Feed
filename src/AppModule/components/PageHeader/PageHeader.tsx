import { Header } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title"
import React from "react"
import { UiHeader } from "./styles"
import { UiTitle } from "../../../components/styles"
export const PageHeader = () => {
    return (
        <UiHeader>
            <img src='/src/assets/igniteLogo.svg' height={40} width={40} alt="Ignite Logo" />
            <UiTitle>Ignite Feed</UiTitle>
        </UiHeader>
    )
}