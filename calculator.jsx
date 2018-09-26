import React from 'react';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {count: [1,2,3,4]}
  }

  render(){
    return (
      <div>
        <h1>Calculator</h1>
        <ul>
          {
            this.state.count.map(count => <li>{count}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default Calculator
