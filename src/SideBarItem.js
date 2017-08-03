import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

class SideBarItem extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  render () {
    return (
      <NavLink
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <ListItem
          onTouchTap={this.props.onClick}
          primaryText={this.props.primaryText}
          hoverColor='lightsteelblue'
        />
      </NavLink>
    )
  }
}

export default SideBarItem
