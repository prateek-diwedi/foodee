import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
//import {restaurant} from '../data/db';
//------------------------- importing components ---------------------------------//
import Button from "../components/Button";

import Photo from "../components/SinglePhoto"
// ----------------------------------- RESTAURANT DATA -----------------------------//
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
//--------------------- Buttons -------------------- //
const photoURL = restaurant.photos[0].photo.url;

storiesOf("Photo", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Logout", () => <Button danger>Logout</Button>)
  .add("singlephoto", () => (<Photo url = {photoURL} ></Photo>))
