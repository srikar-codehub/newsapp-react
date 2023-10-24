import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pageSize: 3,
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();

    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      nextBtn: false,

      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbc372f3450d4d3fb4b4c35576b337a6&page=1&pageSize=${this.props.pageSize}`;

    console.log(url);

    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=cbc372f3450d4d3fb4b4c35576b337a6&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();
    if (
      this.state.page + 1 ===
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        nextBtn: true,
        loading: false,
      });
    } else {
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        nextBtn: false,
        loading: false,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=cbc372f3450d4d3fb4b4c35576b337a6&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      nextBtn: false,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center my-3">Top Headlines</h3>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 45) : "No title"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "Go to news app for further details"
                    }
                    newsUrl={element.url}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "/no-image-available.jpg"
                    }
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3 ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>

          <button
            disabled={this.state.nextBtn}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
