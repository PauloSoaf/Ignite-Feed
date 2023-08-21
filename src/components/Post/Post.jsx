import { AuthorHeader } from "../AuthorHeader/AuthorHeader"
import { PostContainer } from "./styles"

export const Post = () => {
    return (
        <PostContainer>
            <AuthorHeader/>
            <h1>Flamengo</h1>
            <p>Será que nossos jogadores vão parar de se socar</p>
        </PostContainer>
    )
}