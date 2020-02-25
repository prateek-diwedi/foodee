import React, { useRef, useEffect } from "react";
import "./SearchCategories.scss";
import { Container } from "react-bootstrap";
import { TweenMax } from "gsap/all";



export default function Categories() {

  let cardRef = useRef([]);

  useEffect(() => {
    TweenMax.staggerFrom(cardRef.current, 1, {
      scale: 0,
    }, 0.3);
  }, []);

  return (
    <div>
      <div class="categories-search-text" ref={element => { cardRef.current[0] = element; }} onmouseover="floatingOn()" onmouseleave="floatingOff()">
        <h4> Cuisines &amp; Categories</h4>
      </div>
      <Container>
        <section class="wrapper mtop2 ptop">
          <div class="categories-container" ref={element => { cardRef.current[1] = element; }}>
            <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/breakfast" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/breakfast.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" />
              <div class="category-text" ref={element => { cardRef.current[2] = element; }}>Breakfast</div>
            </a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/lunch" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/lunch.jpg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" />
              <div class="category-text" ref={element => { cardRef.current[3] = element; }}>Lunch</div>
            </a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/dinner" class="column ta-center start-categories-item">
              <img class="pic1" src={require('../images/dinner.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" />
              <div class="category-text" ref={element => { cardRef.current[4] = element; }}>Dinner</div>
            </a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/nightlife" class="column ta-center start-categories-item">
              <img class="pic2" src={require('../images/drinks.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" />
              <div class="category-text" ref={element => { cardRef.current[5] = element; }}>Drinks &amp; Nightlife</div>
            </a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/cafes" class="column ta-center start-categories-item">
              <img class="pic" src={require('../images/cafe.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" />
              <div class="category-text" ref={element => { cardRef.current[6] = element; }}>Cafés</div>
            </a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/take-away" class="column ta-center start-categories-item">
              <img class="pic3" src={require('../images/takeout.jpeg')} data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?output-format=webp" />
              <div class="category-text" ref={element => { cardRef.current[7] = element; }}>Take-Out</div>
            </a>
          </div>
        </section>
      </Container>
    </div>
  )
}




