import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Radio from './components/Radio';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      data: [
        {name: "Mark", birth: '11/20/1991'},
        {name: "Penny", birth: '02/11/1986'},
        {name: "Leigh", birth: '06/26/1992'},
        {name: "Butler", birth: '12/01/1990'},
        {name: "Kaya", birth: '04/12/1990'},
        {name: "Winona", birth: '08/27/1993'},
        {name: "Harry", birth: '01/14/1987'},
        {name: "Conan", birth: '09/21/1985'},
      ],
      value: ""
    }
  }

  onHandleClick = (e) => {
    let value = this.state.value

    value = e.target.value==="name"? "name": "age"

    this.setState({
      value
    })

  }

  render(){
    let data = this.state.data,
        value = this.state.value,
        title = {
          textAlign: "center",
          color: "grey"
        }
    return(
      <div>
        <h1 style={title}>People's List</h1>
        <Radio 
          value={value}
          onRadioClick={this.onHandleClick}
        />
        <Table 
          data={data}
          value={value}
        />
      </div>
    )
  }
}

export default App;
