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
                                    <a href="https://www.zomato.com/vancouver/breakfast" class="column ta-center start-categories-item">
                        <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp"/>
                        <div class="category-text">Breakfast</div>
                    </a>
                                    <a href="https://www.zomato.com/vancouver/lunch" class="column ta-center start-categories-item">
                        <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"/>
                        <div class="category-text">Lunch</div>
                    </a>
                                    <a href="https://www.zomato.com/vancouver/dinner" class="column ta-center start-categories-item">
                        <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp"/>
                        <div class="category-text">Dinner</div>
                    </a>
                            
                                    <a href="https://www.zomato.com/vancouver/drinks-and-nightlife" class="column ta-center start-categories-item">
                        <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" />
                        <div class="category-text">Drinks &amp; Nightlife</div>
                    </a>
                                    <a href="https://www.zomato.com/vancouver/cafés" class="column ta-center start-categories-item">
                        <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp"/>
                        <div class="category-text">Cafés</div>
                    </a>
                                    <a href="https://www.zomato.com/vancouver/take-away" class="column ta-center start-categories-item">
                        <img class="category-icons" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?output-format=webp"/>
                        <div class="category-text">Take-Out</div>
                    </a>
                            </div>
        </section>
        </div>
  )
}