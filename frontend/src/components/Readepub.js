import React, { Component} from 'react';
import 'whatwg-fetch';
import { ReactReader } from "react-reader";

import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  ReactReaderStyle // Styles for the epub-reader it you need to customize it
} from "react-reader";

const storage = global.localStorage || null;


class Readepub extends Component{
	constructor(props){
		super(props);
		this.state = {
			epub_content:'',
			content: " ",
			name:''
		};
	}

	componentDidMount(){

		fetch('local_store/55cb53a481fccb665e060027.json').then(response => {
	      console.log(response);
	      return response.json();
	    }).then(responseData => {
	      // Work with JSON data here
	      console.log(responseData);
	      this.setState({
	      	name: responseData.name,
	      	content: responseData.content,
	        epub_content: responseData.if_file.original.relurl

	      })
	    })
	}

	render(){

		const name = this.state.name;
		const content = this.state.content;
		const epub_content = this.state.epub_content;


		return(
			<div>
			<h1>{name}</h1>

				<div dangerouslySetInnerHTML ={{__html: content}}></div>
				<div dangerouslySetInnerHTML ={{__html: epub_content}}></div>

				<div style={{ position: "absolute", height: "100%", width:"100%" }}>
		        <ReactReader
		          url={"/public/course_content/epub/Surface_Areas_and_Volumes.epub"}
		          title={name}
		          location={"epubcfi(/6/2[cover]!/6)"}
		          locationChanged={epubcifi => console.log(epubcifi)}
		        />
		      </div>
			</div> 
			)
	}
}

export default Readepub;