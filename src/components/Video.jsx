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
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video  ">
          <iframe
            className="iframe "
            src={data?.lesson?.videoId}
            height="500px"
            scrolling="no"
          />
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson?.title}</h1>
            <p className="mt-4 text-gray-200">{data?.lesson?.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://avatars.githubusercontent.com/u/95998556?v=4"
              ></img>
              <div className="flex flex-col items-center leading-relaxed ">
                <strong className="font-bold text-2xl">
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
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Cards
            icon={<Notepad size={48} />}
            title="Ideias do projeto"
            iconArrow={<CaretRight size={24} />}
            link={data.lesson.repositorio}
          />
          <Cards
            icon={<Code size={48} />}
            title="Readme"
            iconArrow={<CaretRight size={24} />}
            link={data.lesson.repositorio}

          />
        </div>
      </div>
    </div>
  );
}
