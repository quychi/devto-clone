import React from "react";

const CardComponent = (props) => {
  const { tag, articles } = props;
  return (
    <div className="card">
      <header>
        <h3>{tag}</h3>
        {tag === "Listings" && (
          <a href="/#">
            <small>see all</small>
            {/* small tag for small text */}
          </a>
        )}
      </header>
      <ul>
        {articles.map((a) => {
          return (
            <li key={a.id}>
              <a href="/#">{a.mainTitle}</a> <br />
              <small>{a.subText}</small>
              {a.newarticle && <span>new</span>}
              {/*  use span + css instead of button          */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardComponent;
