import React, { Component }  from 'react'
import Pie from '../components/Pie'
import '../styles/PieContainer.css'

class PieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        reviews: []
      }
    }
  }

  componentDidMount() {
    let pieId = this.props.params.id;
    fetch(`/api/v1/pies/${pieId}`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({data: json})
    })
  }

  render() {
    return(
      <div className="row pies-container">
        <Pie
          key={this.state.data.id}
          id={this.state.data.id}
          name={this.state.data.name}
          image={this.state.data.image}
          reviews={this.state.data.reviews}
        />
      </div>
    )
  }
}

export default PieContainer
