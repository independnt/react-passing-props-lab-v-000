import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fruit: [],
      currentFilter: null,
      filters: []
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
      <div>
        <FruitBasket
          fruit={this.state.fruit}
          filters={this.state.filters}
          updateFilter={this.handleFilterChange}
          currentFilter={this.state.currentFilter}
        />
      </div>
    )
  }
}

export default App;
