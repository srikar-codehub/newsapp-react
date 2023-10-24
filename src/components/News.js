import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "google-news", name: "Google News" },
      author: "The Washington Post",
      title:
        "Israel-Hamas war live news: Rishi Sunak in Israel; Gaza hospital strike fuels war escalation fears - The Washington Post",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS93b3JsZC8yMDIzLzEwLzE5L2lzcmFlbC1uZXdzLWhhbWFzLXdhci1nYXphL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2023-10-19T11:03:45+00:00",
      content: null,
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "LISA MASCARO, FARNOUSH AMIRI and STEPHEN GROVES",
      title:
        "The House speaker's race hits an impasse as defeated GOP Rep. Jim Jordan wants to try again",
      description:
        "WASHINGTON (AP) — Refusing to drop out, Republican Rep. Jim Jordan has brought the House speaker's race to a stalemate — the hard-fighting ally of Donald Trump has been unable to win the gavel but he and his far-right allies won't step aside for a more viable…",
      url: "https://apnews.com/abdef873a8d14979848b658e4ef46fd2",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/f4744a35ee6d43b9a418e1c6c91f2d5c/1920.jpeg",
      publishedAt: "2023-10-19T04:07:42Z",
      content:
        "WASHINGTON (AP) — Refusing to drop out, Republican Rep. Jim Jordan has brought the House speaker's race to a stalemate — the hard-fighting ally of Donald Trump has been unable to win the gavel but he… [+6198 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "BRIAN SLODYSKO",
      title:
        "Trump’s campaign cash overwhelms his GOP rivals. Here are key third-quarter fundraising takeaways",
      description:
        "WASHINGTON (AP) — Donald Trump is crushing his Republican presidential rivals in the contest to raise campaign cash, putting the other White House hopefuls in an unenviable position before the first votes are cast in January.",
      url: "https://apnews.com/a07e78b814376d635f53ea17aa704d1d",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/8397d8343dcd4e38b99d34c86f1dcbf4/3000.jpeg",
      publishedAt: "2023-10-19T04:05:59Z",
      content:
        "WASHINGTON (AP) — Donald Trump is crushing his Republican presidential rivals in the contest to raise campaign cash, putting the other White House hopefuls in an unenviable position before the first … [+6371 chars]",
    },
  ];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h3>Top Headlines</h3>

          <div className="row">
            {this.state.articles.map((element) => {
              console.log(element);
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={
                      element.description == null
                        ? "Go to news page for further details"
                        : element.description.slice(0, 88)
                    }
                    newsUrl={element.url}
                    imageUrl={
                      element.urlToImage == null
                        ? "/no-image-available.jpg"
                        : element.urlToImage
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
