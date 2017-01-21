var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return {
      cost: 1,
      cuisine: '',
      address: '',
      name: '',
      neighborhood: ''
    }
  },

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    })
    // console.log(th)
  },

  handleCost(event){
    this.setState({
      cost: event.target.value
    })
  },

  createRestaurant(event){
    // event.preventDefault()
    // console.log(this.state)
    let data = {
      cost: this.state.cost,
      cuisine: this.state.cuisine,
      address: this.state.address,
      name: this.state.name,
      neighborhood: this.state.neighborhood
    }

    $.ajax({
      url: "/api/restaurants",
      type: "POST",
      data: data,
      success: function(data) {
        console.log(data)
        
      }
    })

      
  },

  render: function() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit ={this.createRestaurant}>
          <input onChange = {this.handleChange.bind(this, "name" )} type="text" value={this.state.name} placeholder="Name"/>
          <input onChange = {this.handleChange.bind(this,"neighborhood" )} type="text" placeholder="Neighborhood"/>
          <input onChange = {this.handleChange.bind(this, "address" )} type="text" placeholder="Address"/>
          <input onChange = {this.handleChange.bind(this,'cuisine' )} type="text" placeholder="Cuisine"/>
          <select onChange = {this.handleCost} >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          <input type="submit" value="Add New Restaurant" />
        </form>
      </div>
    )
  }
});


module.exports = NewRestaurant
