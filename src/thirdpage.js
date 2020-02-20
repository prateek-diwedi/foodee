
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
import NavBar from "./components/NavBar";
import Footer from '../src/components/Footer';
// const restaurant_id = 16619055; //16618773; // 16617115 16618902 16618033 16619055 16617176 16625742 16626268 16628153 16708849
function ThirdPage(props) {
  console.log(props);
  const [rest, setRest] = useState(null);
  const [revs, setReviews] = useState(null);
  const [revss, setReviewsfromdatabase] = useState(null);
  useEffect(() => {
    // const restPromise =
    const restaurantPromise = axios({
      url: "https://developers.zomato.com/api/v2.1/restaurant",
      method: "get",
      params: {
        res_id: props.match.params.restaurant_id
      },
      headers: {
        Accept: "application/json",
        "user-key": "16e9855be80e0336fe3bc1dafa559ad2"
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
        "user-key": "16e9855be80e0336fe3bc1dafa559ad2"
      },
      responseType: "json"
    })

    const reviews = axios({
      url: "http://localhost:3001/api/v1/reviews",
      method: "get",
      params: {
        res_id: props.match.params.restaurant_id
      },
      headers: {
        Accept: "application/json"
      },
      responseType: "json"
    })
    Promise.all([restaurantPromise, reviewsPromise, reviews])
      .then(values => {
        setRest(values[0].data);
        setReviews(values[1].data);
        setReviewsfromdatabase(values[2].data);
        console.log("values of 2", values[2])

      })
      .catch(e => console.log(e));
  }, []);

  if (rest&&revs&&revss) {
    const name = rest.name;
    const hours = rest.timings;
    const cuisine = rest.cuisines;
    const location = rest.location;
    const user_rating = rest.user_rating;
    rest.all_reviews.reviews = revs.user_reviews;
    console.log(revss)
    return (
      <div>
        <div className="App">
          <NavBar></NavBar>
           
          <Row>
            <Col>
              <PhotoCarousel photoList={rest.photos}></PhotoCarousel>
            </Col>
          </Row>
        </div>
        <br />
        <div>
          <Description
            name={name}
            hours={hours}
            cuisine={cuisine}
            location={location}
            user_rating={user_rating}
          ></Description>
        </div>
        <br />
        <div>
          <TabMenu restaurant={rest}></TabMenu>
          <Footer></Footer>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ThirdPage;
