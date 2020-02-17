import React from 'react';
import 'antd/dist/antd.css';
import { Comment, List } from 'antd';
import reviews from "../data/reviewsdatabase";

const data = reviews.user_reviews;
// const data = [
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: 'Han Solo',
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     content: (
//       <p>
//         We supply a series of design principles, practical patterns and high quality design
//         resources (Sketch and Axure), to help people create their product prototypes beautifully and
//         efficiently.
//       </p>
//     ),
//     datetime: (
//       <Tooltip
//         title={moment()
//           .subtract(1, 'days')
//           .format('YYYY-MM-DD HH:mm:ss')}
//       >
//         <span>
//           {moment()
//             .subtract(1, 'days')
//             .fromNow()}
//         </span>
//       </Tooltip>
//     ),
//   },
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: 'Han Solo',
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     content: (
//       <p>
//         We supply a series of design principles, practical patterns and high quality design
//         resources (Sketch and Axure), to help people create their product prototypes beautifully and
//         efficiently.
//       </p>
//     ),
//     datetime: (
//       <Tooltip
//         title={moment()
//           .subtract(2, 'days')
//           .format('YYYY-MM-DD HH:mm:ss')}
//       >
//         <span>
//           {moment()
//             .subtract(2, 'days')
//             .fromNow()}
//         </span>
//       </Tooltip>
//     ),
//   },
// ];

const ReviewsList = () =>{
  return(
    <List
    className="comment-list"
    header={`${data.length} replies`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          // actions={item.actions}
          author={item.review.user.name}
          avatar={item.review.user.profile_image}
          content={item.review.review_text}
          datetime={item.review.review_time_friendly}
        />
      </li>
    )}
  />
  )
}

export default ReviewsList;

// import React, {Component} from 'react';
// // user_reviews
// class Review extends Component {
//     render()
//     {
//         return (
//             <li key={this.props.index} className="reviews__list-item reset-list block-padding-vertical">
//                 <div className="review area">
//                     <h3 className="review__title">{this.props.review.name}</h3>

//                     {this.getDate(this.props.review.date)}

//                     <div className="review__rating">
//                         {this.getStar(1)}
//                         {this.getStar(2)}
//                         {this.getStar(3)}
//                         {this.getStar(4)}
//                         {this.getStar(5)}
//                     </div>

//                     <div className="review__content">
//                         {this.props.review.review}
//                     </div>
//                 </div>
//             </li>
//         );
//     }

//     getStar(rating)
//     {
//         return (
//             <svg height="25" width="23" className="star" data-rating={rating}
//                  data-active={parseInt(this.props.review.rating) === parseInt(rating)}>
//                 <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
//             </svg>
//         );
//     }

//     getDate(date)
//     {
//         if (typeof date === 'object') {
//             return (
//                 <span className="review__date">
//                     Geplaatst op: {date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()}
//                 </span>
//             );
//         }

//     }
// }

// export default Review;