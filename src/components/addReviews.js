import React from "react";
import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import moment from "moment";
import './addReviews.scss'
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
              value={props.rate}
            />
          </div>
        </div>
      );
    }}
  />
);
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Editor = ({ onChangeNote, onChangeRate, onSubmit, submitting, notevalue, ratevalue }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChangeNote} id="note" value={notevalue} />
    </Form.Item>
    <Form.Item>
      <span>
        <Rate tooltips={desc} onChange={onChangeRate} id="rate" value={ratevalue} />
        {ratevalue ? <span className="ant-rate-text">{desc[ratevalue - 1]}</span> : ''}
      </span>
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
      note: null,
      rate: null
    };
  }

  handleSubmit = () => {
    if (!this.state.note || !this.state.rate) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
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
    console.log(this.state.comments)  
    }, 1000);
    
  };

  handleNoteChange = e => {
    console.log(this.state)
    this.setState({
      note: e.target.value
    });
  };

  handleRateChange = e => {
    console.log(this.state)
    this.setState({
      rate: e
    });
  };


  render() {
    const { user, comments, submitting, note, rate } = this.state;
    console.log(comments)
    return (
      <div className="reviewStylingClass">
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src={user.avatar} alt={user.username} />}
          content={
            <Editor
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
    );
  }
}
export default ReviewsList;
