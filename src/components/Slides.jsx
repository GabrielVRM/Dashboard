import { ArrowBendDownLeft, CaretLeft, CaretRight} from "phosphor-react";

export default function Slides() {
  return (
    <>

  <div className="relative">
      <div className="hover:bg-zinc-500 m-2 w-10 h-40 flex items-center cursor-pointer rounded-xl absolute top-1/2 left-0 transform -translate-y-1/2 z-99">
        <CaretLeft size={50} />
      </div>
      <div className=" hover:bg-zinc-500 m-2 w-10 h-40 flex items-center cursor-pointer rounded-xl absolute top-1/2 right-0 transform -translate-y-1/2 z-99">
        <CaretRight size={50} />
      </div>
      <div className="flex overflow-hidden ">
        
            <img src="https://asmetro.org.br/portalsn/wp-content/uploads/2023/02/81-1.jpg" />
            <img src="https://blog.ead.unipar.br/wp-content/uploads/2021/04/inovacao-e-tecnologia.jpg" />
            <img src="https://centric.com.br/wp-content/uploads/2021/04/Como-crescer-na-crise-Centric-dribla-pandemia-e-ano-desafiador-blog.jpg" />
          </div>
      </div>
    </>
       
  );
}
