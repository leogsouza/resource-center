import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

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
          <div className='col s12 m6'>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card Title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card Title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card Title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card Title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Letterhead
