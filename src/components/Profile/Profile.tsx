import React from "react";
import { Button, Card, Divider, Typography } from "antd";
import { BackgroundImg, ProfileCard, ProfileName, ProfileSubTitle } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import { ProfileImg, UiButton, UiDivider, UiSubTitle, UiTitle } from "../styles";
import { PencilLine } from "phosphor-react";
export const Profile = () => {
    return (
        <ProfileCard>
            <BackgroundImg src="https://images.unsplash.com/photo-1635637015046-5a7aef2d591e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhbWVuZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
             alt="Capa de fundo do usuário" 
             />
            <ProfileImg src="https://github.com/pauloSoaf.png"/>
            <ProfileName strong>Paulo Amorim</ProfileName>
            <ProfileSubTitle>Software Developer</ProfileSubTitle>
            <UiDivider/> 
            <UiButton><PencilLine size={20}/> Editar Perfil</UiButton>
        </ProfileCard>
    )
};