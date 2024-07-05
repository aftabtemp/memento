"use client"

import CountUp from "react-countup";


const stats = [
    {
        num:5,
        text:"Years of Experience"
    },{
        num: 25,
        text: "Projects Completed"
    },{
        num: 700,
        text:"Videos Edited"
    },{ 
        num: 6,
        text: "Companies Served"
    }
]
const Stats=()=>{
    return(
        <section className="pt-4  pb-12 xl:pt-0 xl:pb-0 ">
            <div className="container mx-auto">
                <div className= "flex flex-wrap gap-6 max-w-[800vw] mx-auto xl:max-w-none  ">
                    {
                        stats.map((Item,index)=>{
                            return(
                            <div
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
                                key={index}>
                                <CountUp end={Item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extabold  "/>
                                <p className={`${Item.text.length<15?"max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80 `}>{Item.text}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
        </section>
    )
}

export default Stats;