
import Link from "next/link";
import {FaInstagram,FaLinkedinIn,FaYoutube,FaTwitter} from 'react-icons/fa';
const social = [
    {icon: <FaInstagram/>,path:'https://www.linkedin.com/in/thasneem-ciyad-67b38227b/'},
    {icon: <FaLinkedinIn/>,path:'https://www.linkedin.com/in/thasneem-ciyad-67b38227b/'},
    {icon: <FaYoutube/>,path:'https://www.linkedin.com/in/thasneem-ciyad-67b38227b/'},
    {icon: <FaTwitter/>,path:'https://www.linkedin.com/in/thasneem-ciyad-67b38227b/'},
    
]
const Socials =({containerStyles, iconStyles})=>{
    return(
        <div className={containerStyles}>
            {social.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}
export default Socials;