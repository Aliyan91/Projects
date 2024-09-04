import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlist } from "../store/post-list-store";

export default function Card({ post }) {
    const{deletepost}=useContext(Postlist);

    return (
        <div className="card post-card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(post.id)}>
                        <MdDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => (<span class="badge text-bg-primary hashtag m-2">{tag}</span>))}
                <div class="alert alert-primary" role="alert">
                    This post is reacted by {post.reactions} people.
                </div>
            </div>
        </div>
    )
}  