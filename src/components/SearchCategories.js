import React, { useRef, useEffect, useState } from "react";
import "./SearchCategories.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import gsap from "gsap";
import { gsap, TweenMax, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";
{/* <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script> */}



// const { useRef, useEffect, useState } = React;

export default function Categories() {
  
    let cardRef = useRef([]);
      
      useEffect(() => {
        console.log(cardRef);
    
        TweenMax.staggerFrom(cardRef.current, 1, {
          scale: 0,
        }, 0.3);
      }, []);

  return (
    <div>
      <div class="categories-search-text" ref={element => {cardRef.current[0] = element;}} onmouseover="floatingOn()" onmouseleave="floatingOff()">
        <h4> Cuisines &amp; Categories</h4>
      </div>
      <Container>
      <section class="wrapper mtop2 ptop"> 
      <div class="categories-container" ref={element => {cardRef.current[1] = element;}}>
        {/* <Row> */}
          {/* <Col> */}
            <a href="https://www.zomato.com/vancouver/restaurants/pizza" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/breakfast.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp"/>
              <div class="category-text" ref={element => {cardRef.current[2] = element;}}>Breakfast</div>
            </a>
          {/* </Col>     */}
          {/* <Col> */}
            <a href="https://www.zomato.com/vancouver/lunch" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/lunch.jpg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"/>
              <div class="category-text" ref={element => {cardRef.current[3] = element;}}>Lunch</div>
            </a>
          {/* </Col>     */}
          {/* <Col>   */}
            <a href="https://www.zomato.com/vancouver/dinner" class="column ta-center start-categories-item">
              <img class="pic1" src={require('../images/dinner.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp"/>
              <div class="category-text" ref={element => {cardRef.current[4] = element;}}>Dinner</div>
            </a>
          {/* </Col>     */}
          {/* <Col>         */}
            <a href="https://www.zomato.com/vancouver/drinks-and-nightlife" class="column ta-center start-categories-item">
              <img class="pic2" src={require('../images/drinks.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" />
              <div class="category-text" ref={element => {cardRef.current[5] = element;}}>Drinks &amp; Nightlife</div>
            </a>
          {/* </Col>     */}
          {/* <Col> */}
            <a href="https://www.zomato.com/vancouver/cafés" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/cafe.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp"/>
              <div class="category-text" ref={element => {cardRef.current[6] = element;}}>Cafés</div>
            </a>
          {/* </Col>     */}
          {/* <Col> */}
            <a href="https://www.zomato.com/vancouver/take-away" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/takeout.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?output-format=webp"/>
              <div class="category-text" ref={element => {cardRef.current[7] = element;}}>Take-Out</div>
            </a>
          {/* </Col> */}
        {/* </Row> */}
      </div>

      {/* <div className="card-container">
         <div className="card" ref={element => {cardRef.current[0] = element;}} >
           <h1>Card 1</h1>
         </div>
        <div className="card" ref={element => {cardRef.current[1] = element;}}  >
           <h1>Card 2</h1>
         </div>
        <div className="card"  ref={element => {cardRef.current[2] = element;}} >
           <h1>Card 3</h1>
         </div>
      </div> */}
      </section>
      </Container>
    </div>
  )
}



