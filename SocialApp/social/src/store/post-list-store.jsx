import { createContext, useReducer } from "react";

export const Postlist = createContext({
    postList: [],
    addpost: () => { },
    deletepost: () => { },
    addinitialposts:()=>{},
}); 

function postlistReducer(currPostList, action) {
    let newpostlist = currPostList;
    if (action.type === "Delete_Post") {
        newpostlist = currPostList.filter((post) => post.id !== action.payload.id);
    }
    else if(action.type === "Add_Post"){
        newpostlist=[action.payload,...currPostList];
    }
    else if(action.type==="Add_Posts"){
        newpostlist=action.payload.posts;
    }
    return newpostlist;
}
const PostListProvider = ({ children }) => {
    const [postList, dispatchpostlist] = useReducer(postlistReducer, []);

    function addpost(userid, usertitle, userbody, userreactions, usertags) {
        dispatchpostlist({
            type: "Add_Post",
            payload: {
                id: Date.now() ,
                title: usertitle,
                body: userbody,
                //reactions: userreactions,
                userId: userid,
                tags: usertags,
            }
        })
    }

    function addinitialposts(posts) {
        dispatchpostlist({
            type: "Add_Posts",
            payload: {
                posts
            
            }, 
        })
    }

    function deletepost(id) {
        dispatchpostlist({
            type: "Delete_Post",
            payload: {
                id,
            },
        })

    }
    return <Postlist.Provider value={{
        postList,
        addpost,
        deletepost,
        addinitialposts,
    }
    }>{children}</Postlist.Provider>
}


export default PostListProvider;
