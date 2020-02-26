
import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import PhotoCarousel from "./components/photoCarousel";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/description";
import TabMenu from "./components/tabs";
import axios from "axios";
import ViewNavBar from "./components/ViewNavBar";
import Footer from '../src/components/Footer';
import moment from "moment";
import Cookies from 'js-cookie'

// const restaurant_id = 16619055; //16618773; // 16617115 16618902 16618033 16619055 16617176 16625742 16626268 16628153 16708849

const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY
// const user = {user_id : 2,
//               username : 'ario',
//               avatar : "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png"};

const user = {user_id : Cookies.get('id'),
              username : Cookies.get('name'),
              avatar : "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png"};

// a function to fomrat reviews from api to comments
const formatedReviews = data => {
  let reviewNew = data.map(item => {
    return {
      author: item.review.user.name,
      avatar: item.review.user.profile_image,
      content: item.review.review_text,
      datetime: item.review.review_time_friendly,
      rate: item.review.rating
    };
  });
  return reviewNew;
};
// a function to format reviews from DB to comments
const dataBaseReviews = (data,user) =>{
  let reviewList = data.map(item=>{
    return{
    author: user[item.user_id-1].username,
    avatar: "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png",
    content: item.review_text,
    datetime:moment(item.created_at).fromNow(),
    rate: item.rating
    }
  });
  return reviewList
}

function ThirdPage(props) {

  const user_location = {lan:props.match.params.lan,lat:props.match.params.lat};
  const [rest, setRest] = useState(null);
  const [revs, setReviews] = useState(null);
  useEffect(() => {
    const restaurantPromise = axios({
      url: "https://developers.zomato.com/api/v2.1/restaurant",
      method: "get",
      params: {
        res_id: props.match.params.restaurant_id
      },
      headers: {
        Accept: "application/json",
        "user-key": ZOMATO_API_KEY
      },
      responseType: "json"
    });
    const reviewsPromise = axios({
      url: "https://developers.zomato.com/api/v2.1/reviews",
      method: "get",
      params: {
        res_id: props.match.params.restaurant_id
      },
      headers: {
        Accept: "application/json",
        "user-key": ZOMATO_API_KEY
      },
      responseType: "json"
    })

    const reviewsAPIPromise = axios({
      url: "http://localhost:3001/find_review",
      method: "get",
      params: {
        res_id: props.match.params.restaurant_id
      },
      headers: {
        Accept: "application/json"
      },
      responseType: "json"
    })
    const usersAPIpromise = axios({
      url: "http://localhost:3001/users",
      method: "get",
      headers: {
        Accept: "application/json"
      },
      responseType: "json"
    })

    Promise.all([restaurantPromise, reviewsPromise, reviewsAPIPromise,usersAPIpromise])
      .then(values => {
        setRest(values[0].data);
        let rev = (values[1].data.user_reviews)
        const comments1 = formatedReviews(rev);
        if (!values[2].data){
          
          const comments = [...comments1];
          setReviews(comments);
        } else {
          let dbrev = values[2].data;
          let dbusers = values[3].data.users;
          const comments2 = dataBaseReviews(dbrev,dbusers)
          const comments = [...comments2,...comments1]
          setReviews(comments);
        }
      })
      .catch(e => console.log(e));
  }, []);

  if (rest&&revs) {
    const name = rest.name;
    const hours = rest.timings;
    const cuisine = rest.cuisines;
    const location = rest.location;
    const user_rating = rest.user_rating;
    const comments = (revs); // the () around this variable is VERY IMPORTANT otherwise it won't work.
    return (
      <div>
        <div className="App">
          <ViewNavBar></ViewNavBar>

          <Row>
            <Col>
              <PhotoCarousel photoList={rest.photos}></PhotoCarousel>
            </Col>
          </Row>
        </div>
        <br />
        <div>
          <Description
            user_loc = {user_location}
            name={name}
            hours={hours}
            cuisine={cuisine}
            location={location}
            user_rating={user_rating}
            user = {user}
            restaurant={rest}
          ></Description>
        </div>
        <br />
        <div>
          <TabMenu restaurant={rest} user={user} comments = {comments}></TabMenu>
          <Footer></Footer>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ThirdPage;
