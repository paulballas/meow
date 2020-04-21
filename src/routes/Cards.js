import React from 'react';
import Card from '../components/Card'
import Space from '../components/Space'
import catCard from '../images/cat-card.jpg'

class Cards extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Cards</h2>
              <h5>The legos of the UI world.</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                buttons={1}
                buttonTitle1='go go!'
                margin='m-b-1-xs'
                 />
            </div>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                buttons={2}
                buttonTitle1='cancel'
                buttonTitle2='go go!'
                margin='m-b-1-xs'
                 />
            </div>
            <div className='col-md-4 col-xs-12'>
              <Card
                title='Hey there!'
                body='How much wood could a woodchuck chuck, if a woodchuck, could chuck... wood.'
                margin='m-b-1-xs'
                 />
            </div>
          </div>

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
