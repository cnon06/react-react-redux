import React from "react";
import BlogForm from "./BlogForm";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { editBlog, addBlog } from "../actions/blogs";


const EditBlogPage = (props) => {
  
//   const  id  = useParams();
  const navigate = useNavigate();


 const id = props.blog.id;
//   const navigate = useNavigate();
  return (
    <div>
      <h1>EditBlogPage</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(id, blog));
        //  props.dispatch(addBlog(blog))
          navigate("/blogs");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props ) => {
    // console.log("props.match")
    // console.log(props.match.params)
//   const params = useParams;
//   console.log("params")
//   console.log(params)
  
//   const { id } = params();


  return {
    blog: state.blogs.find((blog) => {
     
      return blog.id === "a0626604-1a98-46c7-9a36-546fbd116f23";
    }),
  };

// return {
//     blog: {title: "blog title rerewr", description: "blog description 1" },
//   };
};

export default connect(mapStateToProps)(EditBlogPage);
