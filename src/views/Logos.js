import React, { Component } from 'react'
import { GenericCard } from '../components/GenericCard'
import { CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Logos extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <GenericCard
              headerTitle='Hello'
              headerAvatar='http://via.placeholder.com/100x200'
              mediaImgSrc='http://via.placeholder.com/120x100'
              overlay={
                <CardTitle
                  title='Nice Job'
                  subtitle='Congratulations on this great Achievement'
                />
              }
              cardTitle='Nice one'
              cardSubtitle='Looking good'
              actions={
                <div>
                  <FlatButton label='Action1' />
                  <FlatButton label='Action2' />
                </div>
              }
            >
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. Mais vale um bebadis conhecidiss, que um
              alcoolatra anonimis. Leite de capivaris, leite de mula manquis sem
              cabeça. Delegadis gente finis, bibendum egestas augue arcu ut est.
            </GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Logos
