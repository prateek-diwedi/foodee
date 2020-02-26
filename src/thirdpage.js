
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

const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY

function ThirdPage(props) {
  const params = props.match.params;
  console.log("props--->>",params);
  const [rest, setRest] = useState(null);
  const [revs, setReviews] = useState(null);
  const [revss, setReviewsfromdatabase] = useState(null);
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
      url: "http://localhost:3001/reviews",
      method: "get",
      params: {
        res_id: props.match.params.restaurant_id
      },
      headers: {
        Accept: "application/json"
      },
      responseType: "json"
    })
    Promise.all([restaurantPromise, reviewsPromise, reviewsAPIPromise])
      .then(values => {
        setRest(values[0].data);
        setReviews(values[1].data);
        setReviewsfromdatabase(values[2].data);
      })
      .catch(e => console.log(e));
  }, []);

  if (rest && revs && revss) {
    const name = rest.name;
    const hours = rest.timings;
    const cuisine = rest.cuisines;
    const location = rest.location;
    const user_rating = rest.user_rating;
    rest.all_reviews.reviews = revs.user_reviews;
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
            name={name}
            hours={hours}
            cuisine={cuisine}
            location={location}
            user_rating={user_rating}
            rest_id = {params}
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
