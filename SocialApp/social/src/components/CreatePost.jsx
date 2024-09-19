import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { Postlist } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const id=useRef();
    const title=useRef();
    const body=useRef();
    const reactions=useRef();
    const tags=useRef();

    const {addpost}=useContext(Postlist);
    const navigate=useNavigate();

    function handlesubmit(event){
        event.preventDefault();
        const userid=id.current.value;
        const usertitle=title.current.value;
        const userbody=body.current.value;
        const userreactions=reactions.current.value;
        const usertags=tags.current.value.split(" ");

        id.current.value="";
        title.current.value="";
        body.current.value="";
        reactions.current.value="";
        tags.current.value="";


        addpost(userid,usertitle,userbody,userreactions,usertags);
        

    }
    return (
        <form className="create-post card p-2" onSubmit={handlesubmit}>

            <div className="mb-3">
                <label htmlFor="id" className="form-label">User ID</label>
                <input type="text" className="form-control" id="id" placeholder="Enter user id" ref={id}/>
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="title" placeholder="How are you feeling today" ref={title}/>
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">Content</label>
                <textarea type="text" className="form-control" rows="4" id="body" placeholder="Tell us more" ref={body}/>
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input type="text" className="form-control" id="reactions" placeholder="How many people reacted" ref={reactions}/>
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" className="form-control" id="tags" placeholder="Enter hashtags" ref={tags}/>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{width:"100px"}}>Post</button>
        </form>
    );
}