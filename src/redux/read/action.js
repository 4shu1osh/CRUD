import axios from "axios";

export default function ReadAction(start) {
  return (dispatch, getState) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`)
      .then((res)=> {
        dispatch({type: 'SHOW', payload: res.data})
      })
      .catch((err)=> {
        console.log("err",err)
      })
  }
}

