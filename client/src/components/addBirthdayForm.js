import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BirthdayForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleInputChange} name="name" />
          </label>
          <label>
            Date:
            <input type="date" onChange={this.handleInputChange} name="date" />
          </label>        
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
   
  BirthdayForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }