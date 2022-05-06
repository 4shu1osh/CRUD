import axios from "axios";

export default function CreateAction(title, body, userId) {
  return (dispatch, getState) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, userId})
    .then((res)=> {
        console.log(res)
      dispatch({type: 'ADD', payload: res.data})
    })
    .catch((err)=> {
      console.log("err",err)
    })
  }
}


    
    
 