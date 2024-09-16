import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Post";
import { useContext, useEffect, useState } from "react";
import { Postlist } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loadingspinner from "./Loadingspinner";

export default function Cardlist() {
    const { postList,addinitialposts } = useContext(Postlist);

    const[fetching,setfetching]=useState(false);
    useEffect(()=>{
        
        setfetching(true);
        fetch('https://dummyjson.com/posts?select=title,body,tags,userId')
        .then(res => res.json())
        .then((data)=>{
            addinitialposts(data.posts)
            setfetching(false);
        });

    },[]);

    return (
        <>
            {fetching && <Loadingspinner></Loadingspinner>}
            {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
            {!fetching && postList.map((post) => (
                <Card key={post.id} post={post}/>
            ))}
        </>
    )
}