import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


const Menu = () => {
    const { user } = useContext(UserContext)
    const { setUser } = useContext(UserContext)
    const navigate=useNavigate()
    const handleLogout = async () => {
        try {
            const res = await axios.get(URL + "/api/auth/logout", { withCredentials: true })
            setUser(null)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="bg-gray-600 w-[130px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-2 space-y-4">
            {!user && <h3 className="text-white text-sm hover:text-slate-400 cursor-pointer"> <Link to="/login">Login</Link></h3>}
            {!user && <h3 className="text-white text-sm hover:text-slate-400 cursor-pointer"><Link to="/register">Register</Link></h3>}
            {user && <h3 className="text-white text-sm hover:text-slate-400 cursor-pointer"><Link to={"/profile/"+user._id}>Profile</Link></h3>}
            {user && <h3 className="text-white text-sm hover:text-slate-400 cursor-pointer"><Link to="/write">Write</Link></h3>}
            {user && <h3 className="text-white text-sm hover:text-slate-400 cursor-pointer"><Link to={"/myblogs/"+user._id}>Myblogs</Link></h3>}
            {user && <h3 onClick={handleLogout} className="text-red-700 bg-zinc-100 font-bold px-4 py-1 rounded-xl  hover:bg-slate-300 cursor-pointer">Logout</h3>}

        </div>
    )
}

export default Menu