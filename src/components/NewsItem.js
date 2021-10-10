import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
     let    {title , description, imageUrl,newsUrl,author,date} =this.props;
        return (
            <div className="my-3">
           <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://www.hollywoodreporter.com/wp-content/uploads/2021/09/2021-09-22_IATSE_02.webp?w=681" :imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By { author?author:"unknown"} on {new Date(date).toDateString()} </small> </p>
    <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
