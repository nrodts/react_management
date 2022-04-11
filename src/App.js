import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';


const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'MoongTangE',
  'birthday': '991103',
  'gender': 'Male',
  'job': 'Feminist'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Tajiri',
  'birthday': '123455',
  'gender': 'Male',
  'job': 'Feminists'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Kane',
  'birthday': '129412',
  'gender': 'Male',
  'job': 'MTE'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
