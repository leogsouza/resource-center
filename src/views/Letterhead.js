import React, { Component } from 'react'
import LetterheadCard from '../components/LetterheadCard'

class Letterhead extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. Mais vale um bebadis conhecidiss, que um
              alcoolatra anonimis. Leite de capivaris, leite de mula manquis sem
              cabeça. Delegadis gente finis, bibendum egestas augue arcu ut est.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. Mais vale um bebadis conhecidiss, que um
              alcoolatra anonimis. Leite de capivaris, leite de mula manquis sem
              cabeça. Delegadis gente finis, bibendum egestas augue arcu ut est.
            </p>
          </div>
        </div>
        <div className='row'>
          <LetterheadCard
            title='Card title'
            image='https://unsplash.it/600/776/?random=1'
            action='Action1'
          />
          <LetterheadCard
            title='Card title'
            image='https://unsplash.it/600/776/?random=2'
            action='Action1'
          />
          <LetterheadCard
            title='Card title'
            image='https://unsplash.it/600/776/?random=3'
            action='Action1'
          />
          <LetterheadCard
            title='Card title'
            image='https://unsplash.it/600/776/?random=4'
            action='Action1'
          />
        </div>
      </div>
    )
  }
}

export default Letterhead
