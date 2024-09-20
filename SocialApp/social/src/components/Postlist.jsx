import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Post";
import { useContext, useEffect, useState } from "react";
import { Postlist } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loadingspinner from "./Loadingspinner";
import { useLoaderData } from "react-router-dom";

export default function Cardlist() {
    //const { postList, addinitialposts } = useContext(Postlist);

    // const [fetching, setfetching] = useState(false);
    const postList =useLoaderData();
    return (
        <>
            {/* {fetching && <Loadingspinner></Loadingspinner>} */}
            {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
            {postList.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </>
    )
}

export const postloader = () => {
    return fetch('https://dummyjson.com/posts?select=title,body,tags,userId')
        .then(res => res.json())
        .then((data) => {
            return data.posts
        });
}