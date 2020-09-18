import React, { useState } from 'react'

const Counter = props => {
  /*SAME AS 

  constructer(){
    super()
    this.state={
      count:0
    }
  }
  */
  const [count, setCount] = useState(0)

  /*
    Invoking setCount (count + 1) is the same as saying:
    this.setState({
        count: this.state.count + 1
    })
  */
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add One!</button>
    </div>
  )
}

export default Counter