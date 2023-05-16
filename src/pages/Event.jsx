import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";



export default function Event() {
    const {slug} = useParams()
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex flex-1">
        <Video lessonSlug={slug} />
        <Sidebar />
      </main>
    </div>
  );
}