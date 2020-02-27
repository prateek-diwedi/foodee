import React from "react";
import { Rate } from 'antd';
const axios = require("axios");


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    value: 0,
    };
    this.user = props.user;
    this.restaurant = props.restaurant;
  }
  

  handleChange = value => {
    let rating = {
      user_id: this.user.user_id,
      res_id: this.restaurant.id,
      rating : value
    }
    axios
    .post("http://localhost:3001/ratings", {rating}
    )
     .then(response => {
        this.setState({ value});
        console.log(response)
      })
      .catch(e=>{console.log(e)})
    
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}



export default Rating;