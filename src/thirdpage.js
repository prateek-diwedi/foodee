// import React from "react";
// import "./thirdpage.scss";
// import "antd/dist/antd.css";
// import "../src/index.css";
// import restaurant from "./data/resdatabase";
// import PhotoCarousel from "./components/photoCarousel";
// import { Col, Container, Row } from "react-bootstrap";
// import Description from "./components/description";
// import TabMenu from "./components/tabs";
// import "bootstrap/dist/css/bootstrap.min.css";

// const name =restaurant.name;
// const hours = restaurant.timings;
// const cuisine = restaurant.cuisines;
// const location = restaurant.location;
// const user_rating = restaurant.user_rating;

// function ThirdPage() {
//   return (
//     <div>
//       <div className="third_page">
//         <Container>

//             <Row>
//               <Col>
//                 <PhotoCarousel photoList={restaurant.photos}></PhotoCarousel>
//               </Col>
//             </Row>
//         </Container>
//       </div>
//       <br/>
//       <div>
//         <Description
//           name={name}
//           hours={hours}
//           cuisine={cuisine}
//           location={location}
//           user_rating = {user_rating}
//         ></Description>
//       </div>
//       <br/>
//       <div>
//         <Container>
//           <TabMenu restaurant = {restaurant}>
//           </TabMenu> 
//         </Container>
        
//       </div>
//     </div>
//   );
// }

// export default ThirdPage;
import React, {useEffect,useState} from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import PhotoCarousel from "./components/photoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/description";
import TabMenu from "./components/tabs";
import axios from 'axios';
import NavBar from './components/NavBar';

const restaurant_id = 16618033;//16618773; // 16617115 16618902 16618033 16619055 16617176 16625742 16626268 16628153 16708849
function ThirdPage() {
  const [rest,setRest] = useState(null);
  const [revs,setReviews] =useState([]);
  useEffect(()=>{
    // const restPromise = 
    axios({
      url : "https://developers.zomato.com/api/v2.1/restaurant",
      method: 'get',
      params :{
        res_id : restaurant_id},
      headers : {
        "Accept" : "application/json",
        "user-key": "16e9855be80e0336fe3bc1dafa559ad2"
      },
      responseType : 'json'
    })
    .then(res => {
      setRest(res.data)
      // console.log(res.data)
    })
    .catch((e) => console.log(e))

    // const reviewsPromise = 
    axios({
      url : "https://developers.zomato.com/api/v2.1/reviews",
      method: 'get',
      params :{
        res_id : restaurant_id},
      headers : {
        "Accept" : "application/json",
        "user-key": "16e9855be80e0336fe3bc1dafa559ad2"
      },
      responseType : 'json'
    })
    .then(res => {
      setReviews(res.data)
      // console.log(res.data)
    })
    .catch((e) => console.log(e))
  },[]);









if (rest) {
  const name =rest.name;
const hours = rest.timings;
const cuisine = rest.cuisines;
const location = rest.location;
const user_rating = rest.user_rating;
rest.all_reviews.reviews = revs.user_reviews;
  return (
    <div>
      <div  className="App">
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col>
              <PhotoCarousel photoList={rest.photos}></PhotoCarousel>
            </Col>
          </Row>
        </Container>
      </div>
      <br/>
      <div>
        <Description
          name={name}
          hours={hours}
          cuisine={cuisine}
          location={location}
          user_rating = {user_rating}
        ></Description>
      </div>
      <br/>
      <div>
        <Container>
         <TabMenu restaurant = {rest}>
        </TabMenu> 
        </Container>
        
      </div>
    </div>
  );
}
else {
  return(
    <div></div>
  )
}
}

export default ThirdPage;
