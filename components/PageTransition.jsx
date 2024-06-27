"use client"
import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({children})=>{
    const pathName=usePathname();
    return (
        <div key={pathName}>
            <motion.div intial={{opacity:1}} animate = {{opacity:0,transition:{ delay:1,duration:0.4,ease:"easeInOut"},
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
        <AnimatePresence>{children}</AnimatePresence>
        </div>
    )
}
export default PageTransition;