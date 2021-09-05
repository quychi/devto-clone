import React, { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent";

const Content = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();

      setArticles(data);
    }, 2000);
  }, []);

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="#">Feed</a>
          <a href="#">Week</a>
          <a href="#">Month</a>
          <a href="#">Infinity</a>
          <a href="#">Latest</a>
        </nav>

        <select id="dropdown-select" className="dropdown">
          <option value="Feed" defaultValue>
            Feed
          </option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Infinity">Infinity</option>
          <option value="Latest">Latest</option>
        </select>
      </header>

      {articles?.map((article, id) => {
        return <ArticleComponent key={id} data={article} />;
      })}
    </main>
  );
};

export default Content;
