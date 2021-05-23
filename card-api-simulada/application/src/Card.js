import React from 'react';
import data from './sim-api'

class Card extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: data,
    }
  }
  render(){
    return (
      <div className="container">
          {
            data.map(item => 
              <article className="item">
                <div className="image"></div>
                <h2>
                  Title: { item.title }
                </h2>
                <h3>
                  Nome: { item.author }
                </h3>
                <p>
                  ID: { item.objectID } 
                </p>
                <h4> Comentarios: { item.num_comments }</h4>
              </article>
            )
          }
      </div>
    )
  }

}

export default Card;