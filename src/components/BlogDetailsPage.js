import React from 'react'
import { useParams} from "react-router-dom";
import {connect} from "react-redux"
import BlogDetailsItem from './BlogDetailsItem';



const BlogDetailsPage = (props) => {
 
  // const { id } = useParams()

  // console.log(props.blog)

  return (
    <BlogDetailsItem {...props.blog}/>
    // <div>BlogDetailsPage: {id} </div>
  )
}


const mapStateToProps = (state) => {
 
  const params = useParams;
  const { id } = params();
console.log("details")
console.log(state.blogs)
 
    return {
        blog: state.blogs.find(blog => { return blog.id === id})  
    }
}


export default connect(mapStateToProps)(BlogDetailsPage)

// export default BlogDetailsPage