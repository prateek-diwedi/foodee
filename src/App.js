import React, { useState } from "react";
import FirstPage from "./components/firstPage";
import axios from 'axios'
import ThirdPage from './thirdpage';

function App() {
  const [message, setMessage] = useState("NO MESSAGE YET")
  return (
    <div>
      <div>
          {/* <FirstPage></FirstPage> */}
          {/* <SecondPage></SecondPage> */}
          <ThirdPage></ThirdPage>
          {/* <FirstPage></FirstPage> */}
        {/* </div> */}
      </div>
       
      {/* <FirstPage></FirstPage> */}

      <button onClick={() => {
        axios.get('/api/dogs')
          .then(res => setMessage(res.data.message))
      }}>CLICK</button>
      <h1>{message}</h1>
      
    </div>
  );
}

export default App;
