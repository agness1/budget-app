import React, {FC} from "react"
import { Link } from "react-router-dom"
const Navigation: FC = () => {
    return (
    <nav className="bg-pastelLightBlue w-9/12 h-16 flex justify-between items-center px-20 m-auto rounded-xl">
<img src="/logo.png" className="w-40 p-2"></img>
<div>
   <Link className="px-8 font-medium text-dark hover:text-blue transition-all" to="/"> Home</Link>
   <Link className="px-8 font-medium text-dark hover:text-blue transition-all" to="/blog" >Blog</Link>

</div>
    </nav>
    )
}

export default Navigation