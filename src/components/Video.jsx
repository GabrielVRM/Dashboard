import { CaretRight, Code, Notepad } from "phosphor-react";
import { Button } from "./Button";
import { Cards } from "./Cards";




export default function Video() {
 
  
  return (
    
         <div className="flex-1">       
         <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
<iframe src="https://gabrielvrm.github.io/GameMario/"
width="100%"
height="500px"
/>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold"></h1>
            <p className="mt-4 text-gray-200"></p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://avatars.githubusercontent.com/u/95998556?v=4"
                ></img>
              <div className="flex flex-col items-center leading-relaxed ">
                <strong className="font-bold text-2xl">Gabriel Maximo</strong>
                <span className="text-gray-400">Developer</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Button />
          </div>
        </div>
          <div className="gap-8 mt-20 grid grid-cols-2">
            <Cards
              icon={<Notepad size={48} />}
              title=''
              paragrafo=''
              iconArrow={<CaretRight size={24} />}
              />
            <Cards
              icon={<Code size={48} />}
              title=''
              paragrafo=''
              iconArrow={<CaretRight size={24} />}
              />
          </div>
 
      </div>
    </div>
             
  );
}
