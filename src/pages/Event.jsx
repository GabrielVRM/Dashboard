import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import Logo from '../assets/logo.png'
import { useEffect, useState } from "react";

function Timer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center flex-1 min-h-screen min-w-screen" >
      {isVisible && (
        <img className="animate-pulse" src={Logo}/>
      )}
    </div>
  );
}

export default function Event() {
  const { slug } = useParams();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {!showContent ? (
        <Timer />
      ) : (
        <>
        <div>
          <Header />
          <main className="flex flex-1">
            <Video lessonSlug={slug} />
            <Sidebar />
          </main>
        </div>
        </>
      )}
    </div>
  );
}
