import { Content } from "antd/es/layout/layout"
import { CommentBox, CommentContent, CommentFooter, CommentImg, CommentLayout } from "./styles"
import { ProfileName } from "../Profile/styles"
import { AuthorHeaderContainer, StyledCol, StyledRow, Time } from "../AuthorHeader/styles"
import { Trash, ThumbsUp } from "phosphor-react"
import { useState } from "react"
export const Comment = () => {
  const [likes, setLikes] = useState(43);
  const [liked, setLiked] = useState(false);
  const [likeButtonColor, setLikeButtonColor] = useState('');
  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
      setLikeButtonColor('#00B37E');
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
      setLikeButtonColor('');
    }
  }
  return (
    <CommentLayout>
      <CommentImg
        src="https://github.com/pauloSoaf.png"
        alt="Author profile photo"
      />
      <Content>
        <CommentBox>
          <AuthorHeaderContainer>
            <StyledRow>
              <StyledCol>
                <ProfileName style={{ fontSize: '0.875rem' }}>Paulo Amorim</ProfileName>
                <Time>Cerca de 1h atrás</Time>
              </StyledCol>
            </StyledRow>
            <StyledRow>
              <StyledCol><Trash size={24} color="#8D8D99" /></StyledCol>
            </StyledRow>
          </AuthorHeaderContainer>
          <CommentContent>
            Ninguém te perguntou nada não cara
          </CommentContent>
        </CommentBox>
        <CommentFooter style={{color: likeButtonColor}} onClick={handleLike}>
          <ThumbsUp size={20} />
          <p>Aplaudir • {likes}</p>
        </CommentFooter>

      </Content>
    </CommentLayout>
  )
}