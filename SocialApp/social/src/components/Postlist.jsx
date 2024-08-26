import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Post";
import { useContext } from "react";
import { Postlist } from "../store/post-list-store";

export default function Cardlist() {
    const { postList } = useContext(Postlist)
    return (
        <>
            {postList.map((post) => (
                <Card key={post.id} post={post}/>
            ))}
        </>
    )
}