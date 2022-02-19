import React,{ useEffect} from 'react';
import { useParams } from 'react-router-dom';



const BlogView = () => {
    const {id} = useParams();
  return (
    <div>{id}</div>
  )
}

export default BlogView