import { CaretRight, Code, Notepad, GithubLogo } from "phosphor-react";

import { Button } from "./Button";
import { Cards } from "./Cards";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_LESSONS_SLUG = gql`
  query ($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      slug
      repositorio
      lessonType
      description
      subtitle
      gabriel {
        bio
        name
      }
    }
  }
`;

export default function Video(props) {
  const { data } = useQuery(GET_LESSONS_SLUG, {
    variables: {
      slug: props.lessonSlug,
    },
  });
  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }
  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video flex items-center justify-center ">
      { data?.lesson?.videoId ? <iframe
            className="iframe "
            src={data?.lesson?.videoId}
            height="500px"
            scrolling="no"
          /> 
          : 
          <div className="flex items-center justify-center">
          <h1 className="flex text-6xl font-light ">{data?.lesson?.title}</h1>
          </div>
          }
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 border-2 border-blue-500 rounded-full"
                src="https://avatars.githubusercontent.com/u/95998556?v=4"
              ></img>
              <div className="flex flex-col items-center leading-relaxed ">
                <strong className="text-2xl font-bold">
                  {data?.lesson?.gabriel?.name}
                </strong>
                <span className="text-gray-400">Developer</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            
            {data?.lesson?.lessonType === "Projetos" ? 
              <div  className="flex flex-col gap-4 " >
                
                <Button
                  title="Acessar o Projeto"
                  icon={<GithubLogo />}
                  link={data?.lesson?.videoId}
                />
                <Button
                  title="Acessar o Repositorio"
                  icon={<Code />}
                  link={data?.lesson?.repositorio}
                />
              </div>
              : 
              <Button
                title="Acessar o Repositorio"
                icon={<Code />}
                link={data?.lesson?.repositorio}
              />
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{data?.lesson?.title}</h1>
        <p className="mt-4 text-gray-200">{data?.lesson?.subtitle}</p>
        <p className="mt-4 text-gray-200">{data?.lesson?.description}</p>

        </div>
       {data?.lesson?.lessonType === "Projetos" ? 
       <div className="grid grid-cols-2 gap-8 mt-20">
          <Cards
            icon={<Notepad size={48} />}
            title="Ideias do projeto"
            iconArrow={<CaretRight size={24} />}
            link={data?.lesson?.repositorio}
          />
          <Cards 
            icon={<Code size={48} />}
            title="Readme"
            iconArrow={<CaretRight size={24} />}
            link={data?.lesson?.repositorio}

          />
                  </div>
          : 
          <div className="grid grid-cols-1 gap-8 mt-20 " >
            <Cards 
            icon={<Code size={48} />}
            title="Aprendizado "
            iconArrow={<CaretRight size={24} />}
            link={data?.lesson?.repositorio}
            color="bg-zinc-100"

          />
            </div>
          } 
      </div>
    </div>
  );
}
