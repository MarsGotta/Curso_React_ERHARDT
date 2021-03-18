import OwlIcon from '../OwlIcon/OwlIcon'
import './LikeButton.css';
import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'No me gusta' : 'Me gusta';
    // '<i class="fas fa-thumbs-down"></i>' : '<i class="fas fa-thumbs-up"></i>'
    return (
      <div className="customContainer">
        <a className="btn btn-primary" onClick={this.handleClick}>
          {label}</a>
      </div>
    );
  }
}

export default LikeButton;
