"use client"

import { FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJS } from "react-icons/fa";
import {SiCanva,SiAdobepremierepro,SiDavinciresolve, SiAudacity} from "react-icons/si";

const about ={
    title:"About me",
    description:"I'm a passionate freelance content creator with a knack for shooting and editing high-quality videos. I love helping brands grow their online presence by crafting compelling stories that engage and inspire audiences. With a blend of creativity and strategic insight, I ensure each project not only meets but exceeds expectations, driving meaningful results for my clients.",
    info:[
        {
            fieldName: "Name",
            fieldVal: "Thasneem Ciyad"
        },{
            fieldName: "Phone",
            fieldVal: "(+91) 92053 89637"
        },{
            fieldName: "Experience",
            fieldVal: "5+ Years"
        },{
            fieldName: "Email",
            fieldVal: "forgedbythasneem@gmail.com"
        },{
            fieldName: "Linkedin",
            fieldVal: "thasneem.ciyad"
        },{
            fieldName: "Nationality",
            fieldVal: "Indian"
        },{
            fieldName: "freelance",
            fieldVal: "Available"
        },{
            fieldName:"Languages",
            fieldVal: "English, Hindi"
        },
    ]
};

// experience data

const experience = {
    icon:'/assets/resume/badge.svg',
    title: 'My experience',
    description:" My experience with diverse companies enhanced my ability to adapt to different brand voices, manage time effectively, and innovate creative solutions that drive results.",
    items: [
       
        {   
            company:"Witness The Fitness pvt ltd",
            position:"Content Creator",
            duration:"2024-Present"
        },{
            company:"Deebaco pvt ltd",
            position:"Content Creator",
            duration:"2023-2024"
        },{
            company:"The Calisthenics Bull",
            position:"Content Creator",
            duration:"2020-2023"
        }

    ]
}

const Freelance= {
    icon:'/assets/resume/badge.svg',
    title: 'My experience',
    description:"As a freelance content creator, I shoot and edit high-quality videos that help brands grow their online presence. My expertise enhances audience engagement and delivers impactful results. I blend creativity with strategy to ensure each project succeeds.",
    items: [
        {
            company:"Scrap Buddy",
            position:"Content Creator",
            duration:"June 2024"
        },{   
            company:"Khan Engineering",
            position:"Content Creator",
            duration:"May 2024"
        },{
            company:"Hottin",
            position:"Content Creator",
            duration:"April 2024"
        },
    ]
}


const skills ={
    title:"My Skills",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia itaque, tempore voluptatibus natus dolorem, adipisci qui numquam, unde soluta libero sit nostrum molestiae animi expedita dolore aliquam quos sapiente?",
    skilllist:[
       { 
        icon:<SiDavinciresolve/>,
        name:"DaVinci Resolve"
       },{
        icon:<SiAudacity/>,
        name:"Audacity"
       },{
        icon:<SiAdobepremierepro/>,
        name:"Adobe Premiere Pro"
       },{
        icon:<SiCanva/>,
        name:"Canva"
       },

    ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = ()=>{
    return(
        <motion.div 
            initial={{opacity:0}} 
            animate={{  
                opacity:1,
                transition:{delay:2.4, duration:0.4, ease:"easeIn"}
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="about" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6">
                        <TabsTrigger value="freelance">Freelance Experience</TabsTrigger>
                        <TabsTrigger value="work">Work Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="freelance" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font bold">{Freelance.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{Freelance.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {Freelance.items.map((item,index)=>{
                                            return (
                                            <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p>{item.company}</p>
                                                </div>
                                            </li>)
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="work" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=>{
                                            return (
                                            <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p>{item.company}</p>
                                                </div>
                                            </li>)
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skilllist.map((item,index)=>{
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}> 
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300  ">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                            </li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p
                                    className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                                >{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index)=>{
                                        return(
                                            <li key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldVal}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
}

export default Resume;