import React, { Component }  from 'react';
import PieTile from '../components/PieTile';

class PiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pies: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/pies')
    .then((response) => response.json())
    .then((json) => {
      this.setState({pies: json})
    })
  }

  render() {
    let pies = this.state.pies.map(pie => {
      return(
        <PieTile
          key={pie.id}
          id={pie.id}
          name={pie.name}
          image={pie.image}
        />
      )
    })
    return(
      <div className="large-12 columns pies-container">
        {pies}
        {this.props.children}
      </div>
    )
  }
}

export default PiesContainer;
