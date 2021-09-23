import React from "react";

function ArticleCard({ article }) {
    const newDate = new Date(article.publishedDate);
    const dateString = newDate.toDateString();

    return(
        <div className="articleCardWrapper">
            <div className="articleCardImage">
                <img src={article.image.url} alt={article.image.alt}/>
            </div>
            <div className="articleCardText">
                <h2 className="articleCardTitle">{article.title}</h2>
                <p className="articleCardDate">{dateString}</p>
                <p className="articleCardBlurb">{article.blurb}</p>
                <p className="articleCardLink"> 
                    <a href={`/article/${article.id}`}>Read More</a>
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;