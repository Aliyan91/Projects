import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Post";
import { useContext, useEffect } from "react";
import { Postlist } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

export default function Cardlist() {
    const { postList,addinitialposts } = useContext(Postlist);

    useEffect(()=>{
        fetch('https://dummyjson.com/posts?select=title,body,tags,userId')
        .then(res => res.json())
        .then((data)=>{addinitialposts(data.posts)});
    },[]);

    return (
        <>
            {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
            {postList.map((post) => (
                <Card key={post.id} post={post}/>
            ))}
        </>
    )
}