import { AuthorHeader } from "../AuthorHeader/AuthorHeader"
import { PostContent } from "../PostContent/PostContent"
import { PostContainer } from "./styles"

export const Post = () => {
    return (
        <PostContainer>
            <AuthorHeader/>
            <PostContent/>
        </PostContainer>
    )
}