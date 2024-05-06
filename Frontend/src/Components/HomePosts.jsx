import {IF} from "../url"
const HomePosts = ({ post }) => {
    return (
        <div className="w-full flex flex-col md:flex-row mt-8 space-x-6  ">
            {/*Left*/}
            <div className="w-full md:w-[35%] h-full flex justify-center items-center ">
                <img src={IF+post.photo}
                    alt="" className="h-full w-full object-cover " />
            </div>
            {/*Right*/}
            <div className="flex flex-col w-[65%]  rounded-xl p-2">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl ">
                    {post.title}
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-slate-800 items-center justify-between md:mb-4 ">
                    <p>@{post.username}</p>
                    <div className="flex space-x-2">
                        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
                        <p>{new Date(post.updatedAt).toString().slice(16,21)}</p>
                    </div>
                </div>
                <p className="text-lg  ">
                    {post.desc.slice(0,400)+"...Read more"}
                </p>
            </div>
        </div>
    )
}

export default HomePosts