import React from "react";
import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import moment from "moment";
import Rating from "./Rating";
const { TextArea } = Input;
// This is a function to transfer input reviews data from API to the required format in this component

const formatedReviews = data => {
  let reviewNew = data.map(item => {
    return {
      author: item.review.user.name,
      avatar: item.review.user.profile_image,
      content: item.review.review_text,
      datetime: item.review.review_time_friendly,
      rate: item.review.rating
    };
  });
  return reviewNew;
};
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
          <Rate
            disabled
            allowHalf
            defaultValue={Number(props.rate)}
          />
          </div>
        </div>
      );
    }}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Rating onChange={onChange} value={value}></Rating>
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      comments: formatedReviews(props.comments),
      submitting: false,
      value: ""
    };
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: this.state.user.username,
            avatar: this.state.user.avatar,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { user, comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src={user.avatar} alt={user.username} />}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}
export default ReviewsList;
