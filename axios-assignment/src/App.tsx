import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';


function App() {
  const [idd, setId] = useState(0);
  const[titlee,setTitle]=useState("");
  const[authorr,setAuthor]=useState("");

  const fetchdata=async()=>{

    try {
      let data = await axios
        .get("http://localhost:8000/posts")
        .then((response) => {
          console.log(response.data.id)
          setId(response.data.id);
          setTitle(response.data.title)
          setAuthor(response.data.author)
          console.log(idd)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchdata()
  }, []);

  return (
    <div className="App">
      <h3>id: {idd}</h3>
      <h3>title: {titlee}</h3>
      <h3>author: {authorr}</h3>
    </div>
  );
}

export default App;
