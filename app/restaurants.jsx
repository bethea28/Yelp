var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link, browserHistory} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },

  componentDidMount(){
    $.ajax({
      url: '/api/restaurants',
      type: "GET"
    })
    .done((data)=>{
      this.setState({
        restaurants:data
      })
      // console.log(data)
    })
  },

  getId(id){
    console.log("restaurants console.log", id)
    // event.preventDefault()
    this.props.router.push('/' + id)
  },

  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      console.log("restaurants.jsx", this.state.restaurants[0].id)
      return(
        <div>

        <NewRestaurantForm />

        <ol>

          {this.state.restaurants.map(function(ele,indx){
            return <li onClick = {this.getId.bind(this, ele.id)}key = {indx}> {ele.name} </li>
          }.bind(this))}

        </ol>

          <h1>YALP</h1>
         
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurants
