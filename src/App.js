import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    pizzas: [],
    editPizzaId: '',
    editPizzaTopping: '',
    editPizzaSize: '',
    editPizzaVegetarian: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => {
      this.setState({pizzas: pizzas})
    })
  }

  handleEditPizza = (pizza) => {
    this.setState({
      editPizzaId: pizza.id,
      editPizzaTopping: pizza.topping,
      editPizzaSize: pizza.size,
      editPizzaVegetarian: pizza.vegetarian,
    })
  }

  handleFormChange = (newState) => {
    this.setState(newState)
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    console.log(this.state.editPizzaTopping)
    fetch(`http://localhost:3000/pizzas/${this.state.editPizzaId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        topping: this.state.editPizzaTopping,
        size: this.state.editPizzaSize,
        vegetarian: this.state.editPizzaVegetarian
      })
    })
    .then(resp => resp.json())
    .then(pizza => this.setState(prevState => {
      console.log(pizza)
      const matchedPizza = prevState.pizzas.find(oldPizza => oldPizza.id === pizza.id)
      matchedPizza.topping = pizza.topping
      matchedPizza.size = pizza.size
      matchedPizza.vegetarian = pizza.vegetarian
      return {pizzas: prevState.pizzas}
    }))
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizzaId={this.state.editPizzaId} editPizzaTopping={this.state.editPizzaTopping} editPizzaSize={this.state.editPizzaSize} editPizzaVegetarian={this.state.editPizzaVegetarian} handleFormChange={this.handleFormChange} handleSubmitForm={this.handleSubmitForm} />
        <PizzaList pizzas={this.state.pizzas} handleEditPizza={this.handleEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
