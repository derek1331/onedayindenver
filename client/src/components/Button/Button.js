import React from "react"
import {Icon} from "react-materialize"

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
      const icon = this.state.liked ? <Icon small>star</Icon>: <Icon small>star_border</Icon>;
      return (
          <a className="right" onClick={this.handleClick}> 
            {icon}
          </a>
        
      );
    }
  }
  

  export default LikeButton;