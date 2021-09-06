import React, { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent";

const Content = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchAgain = () => {
      if (articles != null) {
        fetch("https://dev.to/api/articles") //need to change the api (calling the api results in the next post)
          .then((res) => res.json())
          .then((result) => setArticles([...articles, ...result]));
      }
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight =
        "innerHeight" in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log("we reached the bottom");
        fetchAgain();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

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
