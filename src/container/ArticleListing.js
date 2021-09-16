import React from 'react';
import articleCard from "../components/ArticleCard";
import Data from '../components/data.json'

function articleListing(){
    console.log(Data);

    const articlesTitle = "articles";
    return(
        <div className= "PageWrapper">
            <h2 className="HeaderOneStyle">{articleTitle}</h2>
            {Data.map((article, key) => (
            <ArticleCard key={key}/>
            ))}
        </div>
    )
}

export default ArticleListing;