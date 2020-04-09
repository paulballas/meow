import React from 'react';
import Card from '../components/Card'
import Space from '../components/Space'
import catCard from '../images/cat-card.jpg'

class Cards extends React.Component {
  render() {
    return (
      <div>
        <h3>Cards</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                buttons={1}
                buttonTitle1='go go!'
                 />
            </div>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                buttons={2}
                buttonTitle1='cancel'
                buttonTitle2='go go!'
                 />
            </div>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                 />
            </div>
          </div>
          <Space h={3}/>
          <div className='row'>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                imgSrc={catCard}
                />
            </div>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                imgSrc={catCard}
                imgCover={true}
                />
            </div>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                imgSrc={catCard}
                imgCover={true}
                badge={'Extra Meow!'}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
