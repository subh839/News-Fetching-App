import React, { Component } from 'react'
import spinner from './loading.gif';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'general',
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
      
    constructor(props){
      super();
      this.state={
    articles:[],
    loading:false,
    page:1
      }
      
      
  }
async updatenews(){
    
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ffb48c71727d420d8cfada1760e73520&page=${this.state.page}&pagesize={this.props.pageSize}`;
this.setState({loading:true});
    let data= await fetch(url);

let parseData= await data.json();
console.log(parseData);

console.log(parseData);
this.setState({articles: parseData.articles,totalArticles:parseData.totalResults,
    loading:false
})

}
 async componentDidMount(){
//console.log("cdm");
/*let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ffb48c71727d420d8cfada1760e73520&page=1&pagesize={this.props.pageSize}`;
let data= await fetch(url);

let parseData= await data.json();
console.log(parseData);

console.log(parseData);
this.setState({articles: parseData.articles,totalArticles:parseData.totalResults})*/
this.updatenews();
  }
  handleNextClick = async()=>{
  /*  if(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize))
  {

  }else{
    console.log("Next");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ffb48c71727d420d8cfada1760e73520&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
let data= await fetch(url);

let parseData= await data.json();
console.log(parseData);
this.setState({articles: parseData.articles})
    this.setState({
        page: this.state.page +1,
        articles:parseData.articles
    })

  }
   */
  this.setState({page:this.state.page+1});
  this.updatenews()
  }
 handleprevClick= async()=>{
  /*  console.log("prev")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ffb48c71727d420d8cfada1760e73520&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    let data= await fetch(url);
    
    let parseData= await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})
        this.setState({
            page: this.state.page -1,
            articles:parseData.articles
        })
        */
this.setState({page:this.state.page-1})
this.updatenews()

  }
  handlepre
    render() {
       // console.log("render")
        return (
            <div className="container my-3">
                <h1 className="text-center">NEWS-Top HeadLines</h1>
           <spinner/>
               <div className="row">
               {this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
                   
                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):" " } imageUrl={element.urlToImage} 
                newsUrl={element.url} author={element.author} date={element.publishedAt} /> 
                
                </div>  
            })}
                            
            </div>
        
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>Previous</button>
                <button  disabled={this.state.page>this.props.pageSize}type="button" className="btn btn-dark" 
                onClick={this.handleNextClick}>Next</button>
            </div>
            </div>
        )
    }
}

export default News
