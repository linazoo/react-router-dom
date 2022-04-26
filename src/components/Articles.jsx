import { useParams, Outlet } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./Sidebar";

export default function Articles() {
  const { teamId } = useParams();

  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading === true) {
    return <p>Loading</p>;
  }

  return (
    <div className="container two-column">
      <Sidebar
        title="Articles"
        list={articles.map((articles) => articles.title)}
      />

      <Outlet />
    </div>
  );
}
