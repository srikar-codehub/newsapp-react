import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    let imgStyle = {
      height: "250px",
      width: "auto",
    };
    let sourceStyle = {
      zIndex: 1,
      left: "92%",
    };

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl}
            style={imgStyle}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <h5>
              Example heading{" "}
              <span
                style={sourceStyle}
                className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              >
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated by {author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
