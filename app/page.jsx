import Socials from "@/components/Socials";
import Photo from "@/components/photo";
import { Button } from "@/components/ui/button";
import { FiDownload }from "react-icons/fi";
import Stats from "@/components/Stats";
const Home = ()=>{
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-[84px]">
          {/* {text} */}
          <div className="text-center xl:text-left order-2 xl:order-none">
           
            <h2 className="h2 mb-6">Hello I'm <br/><span className="text-accent ">Thasneem Ciyad</span></h2>
            <span className="text-xl">Motion Graphics Designer</span>
            <p className="max-w-[500px] mb-9 text-white/80">
            I create striking visual experiences with expertise
             in video editing and motion graphics, combining creativity and precision.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant ="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary hover hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>

    </section>
  )
}

export default Home;