import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './fusTheme'

injectTapEventPlugin()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  SideBarItem = ({ link, text, isExact }) => {
    return (
      <NavLink exact={isExact} to={link}>
        <MenuItem onTouchTap={this.handleClose} primaryText={text} />
      </NavLink>
    )
  }

  render () {
    const SideBarItem = this.SideBarItem
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title='Title'
              iconClassNameRight='muidocs-icon-navigation-expand-more'
              onLeftIconButtonTouchTap={() =>
                this.setState({ open: !this.state.open })}
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <SideBarItem link='/' text='Home' isExact />
              <SideBarItem link='/logos' text='Logos' isExact />
              <SideBarItem link='/posters' text='Posters' isExact />
              <SideBarItem link='/letterhead' text='Letterhead' isExact />
              <SideBarItem link='/share-a-story' text='Share a Story' isExact />
              <SideBarItem
                link='/service-request-form'
                text='Service Request Form'
                isExact
              />
              <SideBarItem link='/Tutorial' text='Tutorial' isExact />
            </Drawer>

            <Route exact path='/' render={() => <h1>Home View</h1>} />
            <Route
              exact
              path='/logos-posters'
              render={() => <h1>Logo and Posters View</h1>}
            />
            <Route exact path='/logos' render={() => <h1>Logos View</h1>} />
            <Route exact path='/posters' render={() => <h1>Posters View</h1>} />
            <Route
              exact
              path='/letterhead'
              render={() => <h1>Letterhead View</h1>}
            />
            <Route
              exact
              path='/share-a-story'
              render={() => <h1>Share a Story View</h1>}
            />
            <Route
              exact
              path='/planning-guide'
              render={() => <h1>Planning Guide View</h1>}
            />
            <Route
              exact
              path='/services'
              render={() => <h1>Services View</h1>}
            />
            <Route
              exact
              path='/glossary'
              render={() => <h1>Glossary View</h1>}
            />
            <Route
              exact
              path='/service-request-form'
              render={() => <h1>Service Request Form View</h1>}
            />
            <Route
              exact
              path='/tutorial'
              render={() => <h1>Tutorial View</h1>}
            />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
