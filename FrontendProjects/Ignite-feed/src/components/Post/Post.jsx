import { AuthorHeader } from "../AuthorHeader/AuthorHeader"
import { Comment } from "../Comment/Comment"
import { PostContent } from "../PostContent/PostContent"
import { PostContainer } from "./styles"

export const Post = () => {
    return (
        <PostContainer>
            <AuthorHeader profileImg="https://github.com/pauloSoaf.png"/>
            <PostContent/>
            <Comment/>
        </PostContainer>
    )
}