import React, { Component } from 'react';

class Card extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <div>
                <b>{this.props.title}</b>
                <br/>
                {this.props.name}
            </div>
         );
    }
}
 
export default Card;
