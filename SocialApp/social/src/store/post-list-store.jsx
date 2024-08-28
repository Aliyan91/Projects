import { createContext, useReducer } from "react";

export const Postlist = createContext({
    postList: [],
    addpost: () => { },
    deletepost: () => { }
});

function postlistReducer(currPostList, action) {
    let newpostlist = currPostList;
    if (action.type === "Delete_Post") {
        newpostlist = currPostList.filter((post) => post.id !== action.payload.id);
    }
    else if(action.type === "Add_Post"){
        newpostlist=[action.payload,...currPostList];
    }
    return newpostlist;
}
const PostListProvider = ({ children }) => {
    const [postList, dispatchpostlist] = useReducer(postlistReducer, Default_POST_LIST);

    function addpost(userid, usertitle, userbody, userreactions, usertags) {
        dispatchpostlist({
            type: "Add_Post",
            payload: {
                id: Date.now() ,
                title: usertitle,
                body: userbody,
                reactions: userreactions,
                userId: userid,
                tags: usertags,
            }
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
    }
    }>{children}</Postlist.Provider>
}

const Default_POST_LIST = [
    {
        id: "1",
        title: "Going to Lahore",
        body: "Hi friends I am going to Lahore.Hope to enjoy alot.",
        reactions: 2,
        userId: "user-9",
        tags: ["vacations", "Lahore", "Enjoying"],
    },
    {
        id: "2",
        title: "Pass ho gaye",
        body: "4 saal ke masti ka bad bhi ho gaye pass.",
        reactions: 15,
        userId: "user-12",
        tags: ["Graduated", "Unbelieveable"],
    },

];

export default PostListProvider;
