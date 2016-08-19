import React, {Component} from 'react';

class Card extends Component {

  componentDidMount() {
    let {id} = this.props.params;
    console.log(id);
  }

  render() {
    return (
        <div className="card card-block col-md-6 offset-md-3 m-t-1">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
    )
  }
}

export default Card;