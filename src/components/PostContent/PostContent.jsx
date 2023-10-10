import { PrimaryButton, UiDivider, UiText } from "../styles"
import { Link, Paragraph, TextArea, UiFooter } from "./styles"
import { useState } from "react"

export const PostContent = () => {
  const [textAreaFocus, setTextAreaFocus] = useState(false)
  return (
    <>
      <Paragraph>Fala galeraa👋 </Paragraph>

      <Paragraph>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz na RocketSeat, evento da Rocketseat. O nome do projeto é Ignite Menu 🚀</Paragraph>

      <Paragraph> deixe aqui seu feedback 👉 <Link href="https://github.com/PauloSoaf/Ignite-Feed" >github.com/PauloSoaf/Ignite-Feed</Link></Paragraph>

      <Paragraph>
        <Link href="">#novoprojeto </Link>
        <Link href="">#rocketseat </Link>
        <Link href="">#nlw</Link>
      </Paragraph>

      <UiDivider />
      <UiFooter> 
      <UiText strong>Deixe seu feedback</UiText>
      <TextArea 
      autoSize={{ minRows: 4, maxRows: 5 }}
      placeholder="Escreva um Comentário..." 
      rows={4}
      onFocus={() => setTextAreaFocus(true)} 
      onBlur={() => setTextAreaFocus(false)} 
       >salve</TextArea>
      {textAreaFocus && <PrimaryButton>Publicar</PrimaryButton>}
      </UiFooter>
    </>
  )
}