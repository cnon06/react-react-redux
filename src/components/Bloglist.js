import React from 'react'
import {connect} from "react-redux"
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return (
    <div>
      <ul>
        {props.blogs.map(blog => {
          return <BlogListItem key={blog.id} {...blog}/>
        })}
      </ul>
       {/* {props.blogs.length} */}
        
        </div>
  )
}

const mapStateToProps = (state) => {

  console.log(state.blogs)
    return {
        blogs: state.blogs
    }
}
export default connect(mapStateToProps)(BlogList)
