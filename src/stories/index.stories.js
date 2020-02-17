import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

//------------------------- importing components ---------------------------------//
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import PictureWithInfo from "../components/PictureWithInfo";
import NavBar from "../components/NavBar";
import PictureWithInfoReverse from "../components/PictureWithInfoRevrese"
import Footer from "../components/Footer"
import WelcomePage from "../components/WelcomePage"
import AutoText from "../components/AutoText"
import Categories from "../components/Categories"
import Location from "../components/Location"
import SignInPage from "../components/SignInPage"
import FirstPage from "../components/firstPage"
import SearchCard from "../SecondPage"


//-------------------------------- categories Data ----------------------------------//
const categories = {
  "categories": [
    {
      "categories": {
        "id": 1,
        "name": "Delivery"
      }
    },
    {
      "categories": {
        "id": 2,
        "name": "Dine-out"
      }
    },
    {
      "categories": {
        "id": 3,
        "name": "Nightlife"
      }
    },
    {
      "categories": {
        "id": 4,
        "name": "Catching-up"
      }
    },
    {
      "categories": {
        "id": 5,
        "name": "Takeaway"
      }
    },
    {
      "categories": {
        "id": 6,
        "name": "Cafes"
      }
    },
    {
      "categories": {
        "id": 7,
        "name": "Daily Menus"
      }
    },
    {
      "categories": {
        "id": 8,
        "name": "Breakfast"
      }
    },
    {
      "categories": {
        "id": 9,
        "name": "Lunch"
      }
    },
    {
      "categories": {
        "id": 10,
        "name": "Dinner"
      }
    },
    {
      "categories": {
        "id": 11,
        "name": "Pubs & Bars"
      }
    },
    {
      "categories": {
        "id": 13,
        "name": "Pocket Friendly Delivery"
      }
    },
    {
      "categories": {
        "id": 14,
        "name": "Clubs & Lounges"
      }
    }
  ]
}

// -------------------------------- Location ----------------------------------------//
const location = {
  "location_suggestions": [
    {
      "entity_type": "city",
      "entity_id": 256,
      "title": "Metro Vancouver, British Columbia",
      "latitude": 49.280721695,
      "longitude": -123.1177491154,
      "city_id": 256,
      "city_name": "Metro Vancouver",
      "country_id": 37,
      "country_name": "Canada"
    }
  ],
  "status": "success",
  "has_more": 0,
  "has_total": 0,
  "user_has_addresses": true
}

// ---------------------------------- Search Data ----------------------------------- //
const search = {
  "results_found": 8082,
  "results_start": 0,
  "results_shown": 2,
  "restaurants": [
    {
      "restaurant": {
        "R": {
          "has_menu_status": {
            "delivery": -1,
            "takeaway": -1
          },
          "res_id": 16621045
        },
        "apikey": "16e9855be80e0336fe3bc1dafa559ad2",
        "id": "16621045",
        "name": "La Taqueria",
        "url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "322 W Hastings Street, Vancouver V6B 1K6",
          "locality": "Downtown",
          "city": "Vancouver",
          "city_id": 256,
          "latitude": "49.2828600000",
          "longitude": "-123.1103680000",
          "zipcode": "V6B 1K6",
          "country_id": 37,
          "locality_verbose": "Downtown, Vancouver"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Mexican",
        "timings": "11 AM to 8:30 PM (Mon-Thu), 11 AM to 12 Midnight (Fri), 12 Noon to 12 Midnight (Sat), 12 Noon to 6 PM (Sun)",
        "average_cost_for_two": 25,
        "price_range": 1,
        "currency": "$",
        "highlights": [
          "Credit Card",
          "Takeaway Available",
          "Lunch",
          "Debit Card",
          "No Alcohol Available",
          "Indoor Seating",
          "Serves Organic Food",
          "Locally Sourced",
          "Ocean Wise",
          "Gluten Free Options",
          "Vegetarian Friendly"
        ],
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "https://b.zmtcdn.com/data/res_imagery/16625712_CHAIN_631aedd701f1393c542772f33331b898.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.8",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "rating_obj": {
            "title": {
              "text": "4.8"
            },
            "bg_color": {
              "type": "lime",
              "tint": "800"
            }
          },
          "votes": "1038"
        },
        "all_reviews_count": 188,
        "photos_url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count": 125,
        "photos": [
          {
            "photo": {
              "id": "u_DYxNDk4NzUyODc",
              "url": "https://b.zmtcdn.com/data/reviews_photos/426/2c136cf3060338f8052e9baae06e7426_1540237241.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/426/2c136cf3060338f8052e9baae06e7426_1540237241.jpg?impolicy=newcropandfit&cropw=777&croph=777&cropoffsetx=423&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Erika Golem",
                "zomato_handle": "erikaeatseverything",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20723723"
              },
              "res_id": 16621045,
              "caption": "Atun, Lengua, Carnitas, Rajas Con Crema, Tinga de Pollo Tacos",
              "timestamp": 1540237248,
              "friendly_time": "Oct 23, 2018",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_NzI3NTU0MDQ0Nz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/64c/930f2af08af583b343b3d0b86558064c_1540237004.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/64c/930f2af08af583b343b3d0b86558064c_1540237004.jpg?impolicy=newcropandfit&cropw=900&croph=900&cropoffsetx=108&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Erika Golem",
                "zomato_handle": "erikaeatseverything",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20723723"
              },
              "res_id": 16621045,
              "caption": "Sopa de Tortilla (6.75)",
              "timestamp": 1540237022,
              "friendly_time": "Oct 23, 2018",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_NjAwNTg3MDYwNz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/05a/b8d6cf12515ddf89d0dd948635abd05a_1540236930.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/05a/b8d6cf12515ddf89d0dd948635abd05a_1540236930.jpg?impolicy=newcropandfit&cropw=900&croph=900&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Erika Golem",
                "zomato_handle": "erikaeatseverything",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20723723"
              },
              "res_id": 16621045,
              "caption": "Spiced Coconut Old Fashioned (12.00)",
              "timestamp": 1540236961,
              "friendly_time": "Oct 23, 2018",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_2ODYzMTE3ODI0N",
              "url": "https://b.zmtcdn.com/data/reviews_photos/939/1b917eeab55971cd9b2ff0b6a2deb939_1540237299.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/939/1b917eeab55971cd9b2ff0b6a2deb939_1540237299.jpg?impolicy=newcropandfit&cropw=827&croph=827&cropoffsetx=205&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Erika Golem",
                "zomato_handle": "erikaeatseverything",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20723723"
              },
              "res_id": 16621045,
              "caption": "Condiments&nbsp;",
              "timestamp": 1540237311,
              "friendly_time": "Oct 23, 2018",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_3NzgwMTAwMTEzM",
              "url": "https://b.zmtcdn.com/data/reviews_photos/3df/587e295ead0426d2394e4240410de3df_1540237352.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/3df/587e295ead0426d2394e4240410de3df_1540237352.jpg?impolicy=newcropandfit&cropw=900&croph=900&cropoffsetx=175&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Erika Golem",
                "zomato_handle": "erikaeatseverything",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20723723"
              },
              "res_id": 16621045,
              "caption": "Churros (5.00)",
              "timestamp": 1540237365,
              "friendly_time": "Oct 23, 2018",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_Tg4NzI2Mzk3NzE",
              "url": "https://b.zmtcdn.com/data/reviews_photos/cbc/8bf84183c97a0986ba6375557aaa4cbc_1501433600.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/cbc/8bf84183c97a0986ba6375557aaa4cbc_1501433600.jpg?impolicy=newcropandfit&cropw=567&croph=567&cropoffsetx=180&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "NeverSayWhen",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/users/neversaywhen-22095679?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/6f8/fbbe95b97434320322f6b2a999aae6f8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/22095679"
              },
              "res_id": 16621045,
              "caption": "",
              "timestamp": 1501433600,
              "friendly_time": "Jul 30, 2017",
              "width": 1008,
              "height": 567
            }
          },
          {
            "photo": {
              "id": "u_MTMxOTE2Nzc1MT",
              "url": "https://b.zmtcdn.com/data/reviews_photos/a85/174c26e6f2eead8d348878e6a606da85_1508863697.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/a85/174c26e6f2eead8d348878e6a606da85_1508863697.jpg?impolicy=newcropandfit&cropw=667&croph=667&cropoffsetx=170&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Patrick",
                "zomato_handle": "gofindpatrick",
                "foodie_level": "Big Foodie",
                "foodie_level_num": 5,
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/gofindpatrick?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/36048880"
              },
              "res_id": 16621045,
              "caption": "",
              "timestamp": 1508863701,
              "friendly_time": "Oct 24, 2017",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_zMwNjU2MzI3NjI",
              "url": "https://b.zmtcdn.com/data/reviews_photos/780/ff94dafbdf34d4a920cebb18fe2f4780_1508863698.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/780/ff94dafbdf34d4a920cebb18fe2f4780_1508863698.jpg?impolicy=newcropandfit&cropw=667&croph=667&cropoffsetx=188&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Patrick",
                "zomato_handle": "gofindpatrick",
                "foodie_level": "Big Foodie",
                "foodie_level_num": 5,
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/gofindpatrick?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/36048880"
              },
              "res_id": 16621045,
              "caption": "",
              "timestamp": 1508863701,
              "friendly_time": "Oct 24, 2017",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_DI1NzA4MjYzOTM",
              "url": "https://b.zmtcdn.com/data/reviews_photos/739/836357e6f35ad3eabe99a69d749e7739_1515444281.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/739/836357e6f35ad3eabe99a69d749e7739_1515444281.jpg?impolicy=newcropandfit&cropw=869&croph=869&cropoffsetx=0&cropoffsety=147&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Lord Of Food",
                "zomato_handle": "LordOfFood",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/LordOfFood?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/d4d/bf0efec11b94e927f2f06f9427e9ad4d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/1287366"
              },
              "res_id": 16621045,
              "caption": "",
              "timestamp": 1515444281,
              "friendly_time": "Jan 09, 2018",
              "width": 870,
              "height": 1160
            }
          },
          {
            "photo": {
              "id": "u_NDQ4NTI2Mjk3OT",
              "url": "https://b.zmtcdn.com/data/reviews_photos/745/0e938316d19fef98a458ccf0d23d5745_1503902437.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/745/0e938316d19fef98a458ccf0d23d5745_1503902437.jpg?impolicy=newcropandfit&cropw=800&croph=800&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Vancity Food Guy",
                "zomato_handle": "vancityfoodguy",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/vancityfoodguy?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/7fe/4cca3a583349e84fc9d64ee1dc62b7fe.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/24928110"
              },
              "res_id": 16621045,
              "caption": "",
              "timestamp": 1503902437,
              "friendly_time": "Aug 28, 2017",
              "width": 800,
              "height": 800
            }
          }
        ],
        "menu_url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16625712_CHAIN_631aedd701f1393c542772f33331b898.jpg?output-format=webp",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/16621045",
        "is_table_reservation_supported": 0,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers": "+1 (604) 565-0511",
        "all_reviews": {
          "reviews": [
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            }
          ]
        },
        "establishment": [
          "Quick Bites"
        ],
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "has_menu_status": {
            "delivery": -1,
            "takeaway": -1
          },
          "res_id": 16624979
        },
        "apikey": "16e9855be80e0336fe3bc1dafa559ad2",
        "id": "16624979",
        "name": "Thierry Chocolaterie Patisserie Cafe",
        "url": "https://www.zomato.com/vancouver/thierry-chocolaterie-patisserie-cafe-west-end-vancouver?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "1059 Alberni Street, Vancouver V6E 1A1",
          "locality": "West End",
          "city": "Vancouver",
          "city_id": 256,
          "latitude": "49.2846648000",
          "longitude": "-123.1227138000",
          "zipcode": "V6E 1A1",
          "country_id": 37,
          "locality_verbose": "West End, Vancouver"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Desserts, Cafe",
        "timings": "7 AM to 12 Midnight (Mon-Fri),8 AM to 12 Midnight (Sat-Sun)",
        "average_cost_for_two": 35,
        "price_range": 2,
        "currency": "$",
        "highlights": [
          "Cash",
          "Debit Card",
          "Takeaway Available",
          "Lunch",
          "Serves Alcohol",
          "Credit Card",
          "Breakfast",
          "No Alcohol Available",
          "Dinner",
          "Wifi",
          "Desserts and Bakes",
          "Indoor Seating"
        ],
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "https://b.zmtcdn.com/data/res_imagery/16624979_RESTAURANT_53d0a93d6b910da1af17ddfdeed1cbf1_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.3",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "rating_obj": {
            "title": {
              "text": "4.3"
            },
            "bg_color": {
              "type": "lime",
              "tint": "700"
            }
          },
          "votes": "1336"
        },
        "all_reviews_count": 312,
        "photos_url": "https://www.zomato.com/vancouver/thierry-chocolaterie-patisserie-cafe-west-end-vancouver/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count": 544,
        "photos": [
          {
            "photo": {
              "id": "u_wNzQ4OTAwMzQ0M",
              "url": "https://b.zmtcdn.com/data/reviews_photos/348/d4fffebfcc08a05260615a2e9b2fb348_1570899000.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/348/d4fffebfcc08a05260615a2e9b2fb348_1570899000.jpg?impolicy=newcropandfit&cropw=567&croph=567&cropoffsetx=166&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Su Jing",
                "foodie_level": "Big Foodie",
                "foodie_level_num": 4,
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/su-jing-38593416?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/01c/e857eaa02bd8537dae71ef1eb5c7d01c.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/38593416"
              },
              "res_id": 16624979,
              "caption": "Gateau Cassis",
              "timestamp": 1570899001,
              "friendly_time": "4 months ago",
              "width": 1008,
              "height": 567
            }
          },
          {
            "photo": {
              "id": "u_Y2Njk1OTE5NzIw",
              "url": "https://b.zmtcdn.com/data/reviews_photos/d3c/fd9f05d182e99ba9313d7f673bea1d3c_1570898998.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/d3c/fd9f05d182e99ba9313d7f673bea1d3c_1570898998.jpg?impolicy=newcropandfit&cropw=567&croph=567&cropoffsetx=169&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Su Jing",
                "zomato_handle": "",
                "foodie_level": "Big Foodie",
                "foodie_level_num": 4,
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/su-jing-38593416?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/01c/e857eaa02bd8537dae71ef1eb5c7d01c.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/38593416"
              },
              "res_id": 16624979,
              "caption": "Chocolate Succe",
              "timestamp": 1570898999,
              "friendly_time": "4 months ago",
              "width": 1008,
              "height": 567
            }
          },
          {
            "photo": {
              "id": "u_MzA1OTA0MTk1NT",
              "url": "https://b.zmtcdn.com/data/reviews_photos/1d7/cd60b0238e8b2876da446921bd60c1d7_1579944579.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/1d7/cd60b0238e8b2876da446921bd60c1d7_1579944579.jpg?impolicy=newcropandfit&cropw=501&croph=501&cropoffsetx=59&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Eat 'n About",
                "zomato_handle": "eatnabout",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/eatnabout?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/e9f/4e0c4a32ceec56bb003d5b3baa93fe9f.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20740259"
              },
              "res_id": 16624979,
              "caption": "Yuzu Creme Brulee; $7.85",
              "timestamp": 1579944586,
              "friendly_time": "20 days ago",
              "width": 800,
              "height": 502
            }
          },
          {
            "photo": {
              "id": "u_5NQNTE4NTMzNjg",
              "url": "https://b.zmtcdn.com/data/reviews_photos/32c/21b898e904c903990bed0c55948b532c_1542088497.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/32c/21b898e904c903990bed0c55948b532c_1542088497.jpg?impolicy=newcropandfit&cropw=567&croph=567&cropoffsetx=245&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "NeverSayWhen",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/users/neversaywhen-22095679?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/6f8/fbbe95b97434320322f6b2a999aae6f8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/22095679"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1542088497,
              "friendly_time": "Nov 13, 2018",
              "width": 1008,
              "height": 567
            }
          },
          {
            "photo": {
              "id": "u_TAyMDU2MTA0MDk",
              "url": "https://b.zmtcdn.com/data/reviews_photos/b25/618933136cc4cdaa2f71790d387f1b25_1544864977.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/b25/618933136cc4cdaa2f71790d387f1b25_1544864977.jpg?impolicy=newcropandfit&cropw=1124&croph=1124&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Nuinui The Cat",
                "zomato_handle": "FridayNuinui",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/FridayNuinui?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/ac7/aea0b52b2ba19ad32381093a7cd77ac7.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/23848952"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1544864977,
              "friendly_time": "Dec 15, 2018",
              "width": 1124,
              "height": 1124
            }
          },
          {
            "photo": {
              "id": "u_TMyODM5ODA2Mzg",
              "url": "https://b.zmtcdn.com/data/reviews_photos/a4c/bcd22a82f6104e1bba35d762cce01a4c_1544864977.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/a4c/bcd22a82f6104e1bba35d762cce01a4c_1544864977.jpg?impolicy=newcropandfit&cropw=1124&croph=1124&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Nuinui The Cat",
                "zomato_handle": "FridayNuinui",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/FridayNuinui?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/ac7/aea0b52b2ba19ad32381093a7cd77ac7.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/23848952"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1544864977,
              "friendly_time": "Dec 15, 2018",
              "width": 1124,
              "height": 1124
            }
          },
          {
            "photo": {
              "id": "u_g3MDQ1NzE5MjUz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/7af/d56cf823fd333c233f1b5ec519d8a7af_1545028801.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/7af/d56cf823fd333c233f1b5ec519d8a7af_1545028801.jpg?impolicy=newcropandfit&cropw=576&croph=576&cropoffsetx=250&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Relaxnsip",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 12,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/users/relaxnsip-20895549?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/78d/7d5ba60df2b0d94295eca962ea87d78d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/20895549"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1545028801,
              "friendly_time": "Dec 17, 2018",
              "width": 1152,
              "height": 576
            }
          },
          {
            "photo": {
              "id": "u_MTg4MjMyNTIxMT",
              "url": "https://b.zmtcdn.com/data/reviews_photos/26d/02ce2f32afc05e0e6d5d31c7a7cf026d_1542088501.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/26d/02ce2f32afc05e0e6d5d31c7a7cf026d_1542088501.jpg?impolicy=newcropandfit&cropw=567&croph=567&cropoffsetx=0&cropoffsety=143&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "NeverSayWhen",
                "zomato_handle": "",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/users/neversaywhen-22095679?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/6f8/fbbe95b97434320322f6b2a999aae6f8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/22095679"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1542088501,
              "friendly_time": "Nov 13, 2018",
              "width": 567,
              "height": 1008
            }
          },
          {
            "photo": {
              "id": "u_zk1MTE1NzAMDQ4",
              "url": "https://b.zmtcdn.com/data/reviews_photos/3bb/c0a13acb30d8266eb5e3157aa67993bb_1544864977.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/3bb/c0a13acb30d8266eb5e3157aa67993bb_1544864977.jpg?impolicy=newcropandfit&cropw=1124&croph=1124&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Nuinui The Cat",
                "zomato_handle": "FridayNuinui",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/FridayNuinui?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/ac7/aea0b52b2ba19ad32381093a7cd77ac7.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/23848952"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1544864977,
              "friendly_time": "Dec 15, 2018",
              "width": 1124,
              "height": 1124
            }
          },
          {
            "photo": {
              "id": "u_c1ODgzNzU4MwNT",
              "url": "https://b.zmtcdn.com/data/reviews_photos/cf8/0cf12d7aa6eeb633abc82baa2b8dccf8_1552108010.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/cf8/0cf12d7aa6eeb633abc82baa2b8dccf8_1552108010.jpg?impolicy=newcropandfit&cropw=756&croph=756&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "J-doug131",
                "foodie_level": "Connoisseur",
                "foodie_level_num": 13,
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/users/jdoug131-24221428?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/24221428"
              },
              "res_id": 16624979,
              "caption": "",
              "timestamp": 1552108010,
              "friendly_time": "11 months ago",
              "width": 756,
              "height": 1008
            }
          }
        ],
        "menu_url": "https://www.zomato.com/vancouver/thierry-chocolaterie-patisserie-cafe-west-end-vancouver/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16624979_RESTAURANT_53d0a93d6b910da1af17ddfdeed1cbf1_c.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/16624979",
        "is_table_reservation_supported": 0,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/vancouver/thierry-chocolaterie-patisserie-cafe-west-end-vancouver/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers": "+1 (604) 608-6870",
        "all_reviews": {
          "reviews": [
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            }
          ]
        },
        "establishment": [
          "Café"
        ],
        "establishment_types": []
      }
    }
  ]
}

// ----------------------------------- Restaurant ----------------------------------- //
const restaurant = {
  "R": {
    "has_menu_status": {
      "delivery": -1,
      "takeaway": -1
    },
    "res_id": 16621045
  },
  "apikey": "16e9855be80e0336fe3bc1dafa559ad2",
  "id": "16621045",
  "name": "La Taqueria",
  "url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
  "location": {
    "address": "322 W Hastings Street, Vancouver V6B 1K6",
    "locality": "Downtown",
    "city": "Vancouver",
    "city_id": 256,
    "latitude": "49.2828600000",
    "longitude": "-123.1103680000",
    "zipcode": "V6B 1K6",
    "country_id": 37,
    "locality_verbose": "Downtown, Vancouver"
  },
  "switch_to_order_menu": 0,
  "cuisines": "Mexican",
  "timings": "11 AM to 8:30 PM (Mon-Thu), 11 AM to 12 Midnight (Fri), 12 Noon to 12 Midnight (Sat), 12 Noon to 6 PM (Sun)",
  "average_cost_for_two": 25,
  "price_range": 1,
  "currency": "$",
  "highlights": [
    "Credit Card",
    "Takeaway Available",
    "Lunch",
    "Debit Card",
    "No Alcohol Available",
    "Indoor Seating",
    "Serves Organic Food",
    "Locally Sourced",
    "Ocean Wise",
    "Gluten Free Options",
    "Vegetarian Friendly"
  ],
  "offers": [],
  "opentable_support": 0,
  "is_zomato_book_res": 0,
  "mezzo_provider": "OTHER",
  "is_book_form_web_view": 0,
  "book_form_web_view_url": "",
  "book_again_url": "",
  "thumb": "https://b.zmtcdn.com/data/res_imagery/16625712_CHAIN_631aedd701f1393c542772f33331b898.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  "user_rating": {
    "aggregate_rating": "4.8",
    "rating_text": "Excellent",
    "rating_color": "3F7E00",
    "rating_obj": {
      "title": {
        "text": "4.8"
      },
      "bg_color": {
        "type": "lime",
        "tint": "800"
      }
    },
    "votes": "1038"
  },
  "all_reviews_count": 188,
  "photos_url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
  "photo_count": 125,
  "photos": [
    {
      "photo": {
        "id": "u_DYxNDk4NzUyODc",
        "url": "https://b.zmtcdn.com/data/reviews_photos/426/2c136cf3060338f8052e9baae06e7426_1540237241.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/426/2c136cf3060338f8052e9baae06e7426_1540237241.jpg?impolicy=newcropandfit&cropw=777&croph=777&cropoffsetx=423&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Erika Golem",
          "zomato_handle": "erikaeatseverything",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/20723723"
        },
        "res_id": 16621045,
        "caption": "Atun, Lengua, Carnitas, Rajas Con Crema, Tinga de Pollo Tacos",
        "timestamp": 1540237248,
        "friendly_time": "Oct 23, 2018",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_NzI3NTU0MDQ0Nz",
        "url": "https://b.zmtcdn.com/data/reviews_photos/64c/930f2af08af583b343b3d0b86558064c_1540237004.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/64c/930f2af08af583b343b3d0b86558064c_1540237004.jpg?impolicy=newcropandfit&cropw=900&croph=900&cropoffsetx=108&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Erika Golem",
          "zomato_handle": "erikaeatseverything",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/20723723"
        },
        "res_id": 16621045,
        "caption": "Sopa de Tortilla (6.75)",
        "timestamp": 1540237022,
        "friendly_time": "Oct 23, 2018",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_NjAwNTg3MDYwNz",
        "url": "https://b.zmtcdn.com/data/reviews_photos/05a/b8d6cf12515ddf89d0dd948635abd05a_1540236930.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/05a/b8d6cf12515ddf89d0dd948635abd05a_1540236930.jpg?impolicy=newcropandfit&cropw=900&croph=900&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Erika Golem",
          "zomato_handle": "erikaeatseverything",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/20723723"
        },
        "res_id": 16621045,
        "caption": "Spiced Coconut Old Fashioned (12.00)",
        "timestamp": 1540236961,
        "friendly_time": "Oct 23, 2018",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_2ODYzMTE3ODI0N",
        "url": "https://b.zmtcdn.com/data/reviews_photos/939/1b917eeab55971cd9b2ff0b6a2deb939_1540237299.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/939/1b917eeab55971cd9b2ff0b6a2deb939_1540237299.jpg?impolicy=newcropandfit&cropw=827&croph=827&cropoffsetx=205&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Erika Golem",
          "zomato_handle": "erikaeatseverything",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/20723723"
        },
        "res_id": 16621045,
        "caption": "Condiments&nbsp;",
        "timestamp": 1540237311,
        "friendly_time": "Oct 23, 2018",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_3NzgwMTAwMTEzM",
        "url": "https://b.zmtcdn.com/data/reviews_photos/3df/587e295ead0426d2394e4240410de3df_1540237352.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/3df/587e295ead0426d2394e4240410de3df_1540237352.jpg?impolicy=newcropandfit&cropw=900&croph=900&cropoffsetx=175&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Erika Golem",
          "zomato_handle": "erikaeatseverything",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/20723723"
        },
        "res_id": 16621045,
        "caption": "Churros (5.00)",
        "timestamp": 1540237365,
        "friendly_time": "Oct 23, 2018",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_Tg4NzI2Mzk3NzE",
        "url": "https://b.zmtcdn.com/data/reviews_photos/cbc/8bf84183c97a0986ba6375557aaa4cbc_1501433600.jpg",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/cbc/8bf84183c97a0986ba6375557aaa4cbc_1501433600.jpg?impolicy=newcropandfit&cropw=567&croph=567&cropoffsetx=180&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "NeverSayWhen",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/users/neversaywhen-22095679?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/6f8/fbbe95b97434320322f6b2a999aae6f8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/22095679"
        },
        "res_id": 16621045,
        "caption": "",
        "timestamp": 1501433600,
        "friendly_time": "Jul 30, 2017",
        "width": 1008,
        "height": 567
      }
    },
    {
      "photo": {
        "id": "u_MTMxOTE2Nzc1MT",
        "url": "https://b.zmtcdn.com/data/reviews_photos/a85/174c26e6f2eead8d348878e6a606da85_1508863697.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/a85/174c26e6f2eead8d348878e6a606da85_1508863697.jpg?impolicy=newcropandfit&cropw=667&croph=667&cropoffsetx=170&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Patrick",
          "zomato_handle": "gofindpatrick",
          "foodie_level": "Big Foodie",
          "foodie_level_num": 5,
          "foodie_color": "ffae4f",
          "profile_url": "https://www.zomato.com/gofindpatrick?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/36048880"
        },
        "res_id": 16621045,
        "caption": "",
        "timestamp": 1508863701,
        "friendly_time": "Oct 24, 2017",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_zMwNjU2MzI3NjI",
        "url": "https://b.zmtcdn.com/data/reviews_photos/780/ff94dafbdf34d4a920cebb18fe2f4780_1508863698.jpg?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/780/ff94dafbdf34d4a920cebb18fe2f4780_1508863698.jpg?impolicy=newcropandfit&cropw=667&croph=667&cropoffsetx=188&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Patrick",
          "zomato_handle": "gofindpatrick",
          "foodie_level": "Big Foodie",
          "foodie_level_num": 5,
          "foodie_color": "ffae4f",
          "profile_url": "https://www.zomato.com/gofindpatrick?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/36048880"
        },
        "res_id": 16621045,
        "caption": "",
        "timestamp": 1508863701,
        "friendly_time": "Oct 24, 2017",
        "width": 640,
        "height": 640
      }
    },
    {
      "photo": {
        "id": "u_DI1NzA4MjYzOTM",
        "url": "https://b.zmtcdn.com/data/reviews_photos/739/836357e6f35ad3eabe99a69d749e7739_1515444281.jpg",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/739/836357e6f35ad3eabe99a69d749e7739_1515444281.jpg?impolicy=newcropandfit&cropw=869&croph=869&cropoffsetx=0&cropoffsety=147&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Lord Of Food",
          "zomato_handle": "LordOfFood",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/LordOfFood?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/d4d/bf0efec11b94e927f2f06f9427e9ad4d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/1287366"
        },
        "res_id": 16621045,
        "caption": "",
        "timestamp": 1515444281,
        "friendly_time": "Jan 09, 2018",
        "width": 870,
        "height": 1160
      }
    },
    {
      "photo": {
        "id": "u_NDQ4NTI2Mjk3OT",
        "url": "https://b.zmtcdn.com/data/reviews_photos/745/0e938316d19fef98a458ccf0d23d5745_1503902437.jpg",
        "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/745/0e938316d19fef98a458ccf0d23d5745_1503902437.jpg?impolicy=newcropandfit&cropw=800&croph=800&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
        "user": {
          "name": "Vancity Food Guy",
          "zomato_handle": "vancityfoodguy",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/vancityfoodguy?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/7fe/4cca3a583349e84fc9d64ee1dc62b7fe.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/24928110"
        },
        "res_id": 16621045,
        "caption": "",
        "timestamp": 1503902437,
        "friendly_time": "Aug 28, 2017",
        "width": 800,
        "height": 800
      }
    }
  ],
  "menu_url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
  "featured_image": "https://b.zmtcdn.com/data/res_imagery/16625712_CHAIN_631aedd701f1393c542772f33331b898.jpg?output-format=webp",
  "has_online_delivery": 0,
  "is_delivering_now": 0,
  "include_bogo_offers": true,
  "deeplink": "zomato://restaurant/16621045",
  "is_table_reservation_supported": 0,
  "has_table_booking": 0,
  "events_url": "https://www.zomato.com/vancouver/la-taqueria-downtown-vancouver/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
  "phone_numbers": "+1 (604) 565-0511",
  "all_reviews": {
    "reviews": [
      {
        "review": []
      },
      {
        "review": []
      },
      {
        "review": []
      },
      {
        "review": []
      },
      {
        "review": []
      }
    ]
  },
  "establishment": [
    "Quick Bites"
  ]
}

// ------------------------------------- Reviews ------------------------------------- //
const reviews = {
  "reviews_count": 188,
  "reviews_start": 0,
  "reviews_shown": 5,
  "user_reviews": [
    {
      "review": {
        "rating": 5,
        "review_text": "I like these place because they serve organic, gluten free and vegetarian friendly food. Yes so many people don't like this place because they don't serve alcohol but its fine for me. I like their bright color decoration as well.",
        "id": 45289262,
        "rating_color": "305D02",
        "review_time_friendly": "4 months ago",
        "rating_text": "Insane!",
        "timestamp": 1569482078,
        "likes": 0,
        "user": {
          "name": "Darren Huston",
          "zomato_handle": "",
          "foodie_level": "Big Foodie",
          "foodie_level_num": 5,
          "foodie_color": "ffae4f",
          "profile_url": "https://www.zomato.com/users/darren-huston-124698190?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/039/a001377e37e2544e6a4ed2078e351039.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/124698190"
        },
        "comments_count": 0
      }
    },
    {
      "review": {
        "rating": 4,
        "review_text": "TACOS! This is one of the best places doing 'em and you've gotta try them. With five locations in the Vancouver area (and one in Victoria) you are never too far from solving your most serious of taco cravings. They were featured on season 2 of You Gotta Eat Here! and Westender magazine named them as #1 Best Mexican 2017. It was Saturday night and we visited their Downtown location on the emblematic East Hastings corridor. This is their original restaurant. This spot is very tiny! It's pretty much a hallway. Their other locations are larger but I was keen on the legit experience of visiting the orig. The staff is incredibly friendly and they'll be happy to cram you in with everyone else. The back portion of the space is where they've got some seating, you might be elbow-to-elbow with other diners, and you'll find yourself in an exposed brick and white subway tile sandwich. It's all part of the atmosphere! The room is dim and feels part hole-in-the-wall taco stand, part downtown chic.  Once seated, it was time for a drink! There are quite a few cocktails on offer, all boasting Mexican flavours. This cocktail program is new as of this past spring. There's a drink called the Bad Hombre and another called the Sinner Man that is served with a smoking piece of torched cinnamon stick (and it smells amazing!). Of course there is plenty of cerveza available as well. I went for the Spiced Coconut Old Fashioned (Wild Turkey, piquant & coconut, bitters, orange oil - $12.00). A little more of an \"adult\" beverage than I typically go for but I loved the idea of creating a cocktail around the idea of spiced coconut. Yup, it was strong and it kicked me in the pants. But it was also very good. I loved the coconut flavour and enjoyed this spin on a classic old fashioned. This will get you in the mood for taco funtime!  I loves me a tortilla soup. A lot. So when I see Sopa de Tortilla (Roasted tomato and guajillo chicken broth with pulled chipotle chicken and chorizo, queso fresco, crema, cilantro, cabbage romaine mix & corn chip julienne - $6.75) on a menu, I've gotta have it. I mean, you could also start with the epic-sounding nachos and they've got salads as well. But I was in for soup. I really liked this. The portion came as a reasonable size which was nice because you'll still have room to eat other things (some places serve you a vat of this stuff!). The broth was deep and flavourful, whispering all of its Mexican secrets into my mouth. The pieces of chicken were delightfully juicy however I couldn't discern very much chorizo. The chips added an incredible crunch and I love how some of the chips get a bit soggy in the broth. Very nice, could be even better with some slices of avocado on top.  Let's be real, the reason that you come to La Taquería is for the tacos. And don't you worry because I tried a bunch of them! They've got sixteen different kinds of tacos. Plus seven burritos and quesadillas should you prefer. But you want the tacos, trust me. Within the taco selection you can also choose from ones served on larger 6\" flour tortillas or ones served on smaller 4\" corn tortillas. I created an entire array to feast upon! Let's tackle this one by one.  Atun (flour tortilla, $7.00) Spice seared tuna, ponzu glaze, wasabi mayo, pico de gallo, cilantro, cabbage romaine mix. This was the only larger flour tortilla one that I had and while I appreciated the nod to Asian flavours, I have to say that this one was my least favourite. The sear on the tuna itself was perfect and this taco had a lot of zippy flavours going on... But over all I have to say that Tacofino wins the monopoly on tuna tacos.  Lengua (corn tortilla, $3.50) Braised beef tongue, salsa verde, chopped onion & cilantro. I was very excited to try this one and it delivered! The chopped tongue meat was ultra tender as I had expected it to be. This one seemed the most decadent out of all of them and I would get it again every time.  Carnitas (corn tortilla, $3.00) Pork confit, red pickled onions, salsa verde, chopped onion & cilantro. A classic. You simply cannot go wrong with this taco shop staple and its succulent pork. The meat is perfectly cooked, shredded but chunky, and the pickled red onion is excellent.  Rajas Con Crema (corn tortilla, $2.50) Cream stewed poblano peppers, sweet corn, mozzarella, cream. La Taquería understands their audience (Vancouver) and therefore there are several veggie tacos on the menu. Don't pass this one by just because you're a meat-eater because it is delicious!! Spicy and sweet and creamy. I love this one. Instead of mozza they should consider using Oaxaca cheese!  Tinga de Pollo (corn tortilla, $3.00) Chorizo and chipotle chicken stew, queso fresco and crema, salsa verde. Normally I'm not too interested in chicken tacos (a little boring? A little \"safe\"?) but this one is very good with the combination of chorizo. The sausage adds a beautiful oiliness to the whole thing that you'll love.  It should go without saying that every single thing in this place is housemade, from the salsas to the sauces. They even have a \"condiment bar\" that you can help yourself to, should you require a little more heat or a little more kick. You'll find their salsa verde, chipotle sauce, and two salsas. As well as more pickled red onions and pickled jalapeños. You can dress your tacos however you like!  Not wanting to miss out on dessert, we grabbed their Churros (Served with a side of cajeta, order of 3, $5.00). Not the best churros that I've ever had, I found them a little dense. But they were sugary sweet and dunked happily into the dulce de leche-like cajeta.  La Taquería Pinche Taco Shop is legit. It's probably the closest thing that you can get to real Mexico. While we ordered a lot on our visit, you could easily pop in and grab a few $3-ish tacos and create an affordable and delicious snack. This is a solid go-to when your body needs tacos. And let's face it, that's always.",
        "id": 39746790,
        "rating_color": "5BA829",
        "review_time_friendly": "Oct 23, 2018",
        "rating_text": "Great!",
        "timestamp": 1540244108,
        "likes": 1,
        "user": {
          "name": "Erika Golem",
          "zomato_handle": "erikaeatseverything",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/erikaeatseverything?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/422/767feab1f6a8b9fb1ea1ccf2e6576422.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/20723723"
        },
        "comments_count": 0
      }
    },
    {
      "review": {
        "rating": 5,
        "review_text": "This is one of my favorite taco places to eat at in Vancouver. Located near City Hall, this restaurant is very cute and decorated with bright colors. They have a great variety of options on their menu and their prices are amazing. You get to choose four tacos for a set price, each made fresh, and each is a burst of flavor in your mouth.",
        "id": 37072097,
        "rating_color": "305D02",
        "review_time_friendly": "Jul 07, 2018",
        "rating_text": "Insane!",
        "timestamp": 1530927327,
        "likes": 0,
        "user": {
          "name": "R.J",
          "zomato_handle": "Prudil",
          "foodie_level": "Super Foodie",
          "foodie_level_num": 10,
          "foodie_color": "f58552",
          "profile_url": "https://www.zomato.com/Prudil?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/738/b7b3993cb6d728e89a90a20a7db35738.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/33891296"
        },
        "comments_count": 0
      }
    },
    {
      "review": {
        "rating": 4,
        "review_text": "I always go through phases where I will be obsessed with a certain food or dish. Earlier this year it was Eggs Benedict, and then soft serve. My latest food obsession is – Tacos!. Where better than La Taqueria to satisfy my cravings? They have six locations (five in Vancouver and one in Victoria). La Taqueria has an extensive offering of tacos, burritos as well as nachos!",
        "id": 36718508,
        "rating_color": "5BA829",
        "review_time_friendly": "Aug 20, 2018",
        "rating_text": "Great!",
        "timestamp": 1534708137,
        "likes": 1,
        "user": {
          "name": "Ceci",
          "zomato_handle": "",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 12,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/users/ceci-29980521?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/a02/d8d60f8a43a40c71e05ca8757a258a02.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/29980521"
        },
        "comments_count": 0
      }
    },
    {
      "review": {
        "rating": 4,
        "review_text": "Today I was invited down to the “La Taqueria” on Hastings Street. This is the popular taco shop’s original location, they are now sporting five others around Vancouver, to satisfy your taco needs. The Hastings branch has been recently renovated, just in time for summer; with a new bar and cocktail program, and some happy hours specials to enjoy them with. Happy Hour runs from 3-6pm every day of the week, and we were here today to take full advantage.",
        "id": 35758313,
        "rating_color": "5BA829",
        "review_time_friendly": "May 31, 2018",
        "rating_text": "Great!",
        "timestamp": 1527729801,
        "likes": 1,
        "user": {
          "name": "Maggi Mei",
          "zomato_handle": "magmei",
          "foodie_level": "Connoisseur",
          "foodie_level_num": 13,
          "foodie_color": "e95151",
          "profile_url": "https://www.zomato.com/magmei?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/812/69ce5f267be85fe8459c3f78ff04d812.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
          "profile_deeplink": "zomato://u/23670959"
        },
        "comments_count": 0
      }
    }
  ]
}


// -----------------------------------  stories -------------------------------------//

//--------------------- Buttons -------------------- //
storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Login", () => <Button confirm>Login</Button>)
  .add("Logout", () => <Button danger>Logout</Button>)
  .add("Prateek", () => <Button danger>Prateek</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

  // --------------------------------- Search Bar -------------------------- //
  storiesOf("SearchBar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Search Bar", () => <SearchBar>Search</SearchBar>)
  .add("Clickable", () => (
    <SearchBar 
    onSearch={action("onSearch")}
    />
  ))

  // ----------------------------------- Picture with image ---------------------------- //
  storiesOf("PictureWithInfo", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Food Picture", () => <PictureWithInfo>Picture</PictureWithInfo>)

  // ----------------------------------- NavBar ---------------------------- //
  storiesOf("NavBar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Nav Bar", () => <NavBar>Nav Bar</NavBar>)

  // ----------------------------------- Picture with image Reverse ---------------------------- //
  storiesOf("PictureWithInfoReverse", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Food Picture", () => <PictureWithInfoReverse>Picture</PictureWithInfoReverse>)

  // ------------------------------------- Footer ----------------------------------------------- //
  storiesOf("Footer", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Footer", () => <Footer>Footer</Footer>)

  // -------------------------------------- welcome page -------------------------------------------- //
  storiesOf("WelcomePage", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Welcome Page", () => <WelcomePage>Welcome</WelcomePage>)

  // --------------------------------------- Auto Text --------------------------------------------------//
  storiesOf("AutoText", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Auto Text", () => <AutoText>Auto</AutoText>)

  // --------------------------------------- Categories ------------------------------------------------ //
  storiesOf("Categories", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Categories", () => <Categories>Categories</Categories>)

  // -------------------------------------------- Location ---------------------------------------------- //
  storiesOf("Location", module)
  .add("Location", () => <Location>Location</Location>)

  // -------------------------------------------- Sign In Page ----------------------------------------- //
  storiesOf("SignInPage", module)
  .add("Sign In Page", () => <SignInPage></SignInPage>)

  //-----------------------------------------------  first Page--------------------------------------- //
  storiesOf("firstPage", module)
  .add("First Page", () => <FirstPage></FirstPage>)

  //------------------------------------------- search card -----------------------------------//
  storiesOf("Search Card", module)
  .add("Search Card", () => <SearchCard></SearchCard>)