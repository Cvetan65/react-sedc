import React, { Component } from "react";
import "./News.css"
import { Card } from "react-bootstrap";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsData: [],
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa0be396c9f64deb8255f8c1cccd8c51"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          newsData: data.articles,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.newsData.map((article) => (
          <Card className="card" style={{ width: "18rem" }} key={article.url}>
            <Card.Img style={{ width: "inherit" }} variant="top" src={article.urlToImage ? article.urlToImage : "/logo192.png"} />
            <Card.Body>
              <Card.Title className="title">{article.title}</Card.Title>
              <Card.Text className="author">{article.author}</Card.Text>
              <Card.Subtitle className="desc">{article.description}</Card.Subtitle>
              <Card.Text>{article.content}</Card.Text>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Go to url </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default News;
