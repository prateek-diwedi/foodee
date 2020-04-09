import React from "react";
import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import moment from "moment";
import "./addReviews.scss";
import Cookies from "js-cookie"
import { Alert } from 'reactstrap';
const { TextArea } = Input;
const axios = require("axios");

// This is a function to transfer input reviews data from API to the required format in this component


const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => {
      return (
        <div>
          <div>
            <Comment {...props} />
          </div>
          <div>
            <Rate disabled allowHalf value={props.rate} />
          </div>
        </div>
      );
    }}
  />
);
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

// Cookies.get('name');
//     let loggedInUser = Cookies.get('name');
//     console.log('user in comment button -->', loggedInUser)
const Editor = ({
  user,
  onChangeNote,
  onChangeRate,
  onSubmit,
  submitting,
  notevalue,
  ratevalue
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChangeNote} id="note" value={notevalue} />
    </Form.Item>
    <Form.Item>
      <span>
        <Rate
          tooltips={desc}
          onChange={onChangeRate}
          id="rate"
          value={ratevalue}
        />
        {ratevalue ? (
          <span className="ant-rate-text">{desc[ratevalue - 1]}</span>
        ) : (
          ""
        )}
      </span>
    </Form.Item>
    <Form.Item>
    <div>
        { user.user_id ? (
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
       ) : (
        <Alert color="danger">
      Login to add Reviews!
    </Alert>
       
        )}
        </div>
    </Form.Item>
  </div>
);

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      comments: props.comments,
      submitting: false,
      note: null,
      rate: null
    };
    this.res_id = props.res_id;
  }
  
  handleSubmit = () => {
    if (!this.state.note && !this.state.rate) {
      return;
    }

    this.setState({
      submitting: true
    });
    let review = {
      
      user_id: this.state.user.user_id,
      res_id: this.res_id,
      review_text: this.state.note,
      rating: this.state.rate
    };

    axios
      .post("https://foodee-api.herokuapp.com/reviews", { review })
      .then(() => {
        
        this.setState({
          submitting: false,
          note: null,
          rate: null,
          comments: [
            {
              author: this.state.user.username,
              avatar: this.state.user.avatar,
              content: <p>{this.state.note}</p>,
              datetime: moment().fromNow(),
              rate: this.state.rate
            },
            ...this.state.comments
          ]
        });
        console.log(this.state.comments);
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleNoteChange = e => {
    console.log(this.state);
    this.setState({
      note: e.target.value
    });
  };

  handleRateChange = e => {
    console.log(this.state);
    this.setState({
      rate: e
    });
  };

  render() {
    
    const { user, comments, submitting, note, rate } = this.state;
    console.log(comments);
    return (
      <div>
      
      <div className="reviewStylingClass">
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src={user.avatar} alt={user.username} />}
          content={
            <Editor
              user = {user}
              onChangeNote={this.handleNoteChange}
              onChangeRate={this.handleRateChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              notevalue={note}
              ratevalue={rate}
            />
          }
        />
      </div>
        
      </div>
    );
  }
}
export default ReviewsList;
