import React from "react";
import { Button, Card, Divider, Typography } from "antd";
import { ProfileCard, ProfileImg } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import { UiButton, UiSubTitle, UiTitle } from "../styles";
export const Profile = () => {
    return (
        <ProfileCard>
            <img src="https://images.unsplash.com/photo-1635637015046-5a7aef2d591e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhbWVuZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
             alt="Capa de fundo do usuário" 
             height={90}
             width={256}
             />
             <ProfileImg src="https://github.com/pauloSoaf.png"/>
            <UiTitle style={{fontSize:'1rem'}}>Paulo Amorim</UiTitle>
            <UiSubTitle>Software Developer</UiSubTitle>
            <Divider />
            <UiButton><AiOutlineEdit/> Editar Perfil</UiButton>
        </ProfileCard>
    )
};