import React from "react";
import "./Categories.scss"

export default function Categories() {

  return (
    <div>
      <div class="categories-search-text">
        <h2> Quick Search</h2>
        <h4> Categories </h4>
      </div>
      <section class="wrapper mtop2 ptop">

        <div class="categories-container">
          <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/breakfast" class="column ta-center start-categories-item">
            <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" />
            <div class="category-text">Breakfast</div>
          </a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/lunch" class="column ta-center start-categories-item">
            <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" />
            <div class="category-text">Lunch</div>
          </a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/dinner" class="column ta-center start-categories-item">
            <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" />
            <div class="category-text">Dinner</div>
          </a>

          <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/nightlife" class="column ta-center start-categories-item">
            <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" />
            <div class="category-text">Drinks &amp; Nightlife</div>
          </a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/cafes" class="column ta-center start-categories-item">
            <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" />
            <div class="category-text">Cafés</div>
          </a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="http://localhost:3000/search/49.2827291/-123.1207375/take-away" class="column ta-center start-categories-item">
            <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?output-format=webp" />
            <div class="category-text">Take-Out</div>
          </a>
        </div>
      </section>
    </div>
  )
}