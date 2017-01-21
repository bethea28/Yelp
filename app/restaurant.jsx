var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },

  componentDidMount(){
    $.ajax({
      url:'/api/restaurants/' + this.props.params.id,
      type: "GET"
    })
    .done((data)=>{
      this.setState({
        restaurant: data
      })
    console.log(this.state.restaurant.name)
      console.log("console.log from restaurnt", data)
    })
  },

  render: function() {
    let stars = ""
    let reviews = []
    console.log("coming from restaurant" , this.props.params.id)
    var final = this.state.restaurants
    if (this.state.restaurant) {
      return (
        <div>
        <Review id = {this.props.params.id}/>
        <h1>
            {Object.keys(<li>this.state.restaurant</li>)}
          {this.state.restaurant.name}
        </h1>
        <h1>
          {this.state.restaurant.neighborhood}
        </h1>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurant
