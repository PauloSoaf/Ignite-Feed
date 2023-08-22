import { Content } from "antd/es/layout/layout"
import { Post } from "../Post/Post"
import { FeedContent } from "./styles"

export const Feed = () => {
    return (
        <FeedContent>
            <Post />
            <Post />
        </FeedContent>
    )
}