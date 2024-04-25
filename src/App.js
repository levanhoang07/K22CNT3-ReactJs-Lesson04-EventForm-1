import React, { Component } from 'react'
import LVH_EventForm1 from './components/LVH_EventForm1'
import LVH_EventForm2 from './components/LVH_EventForm2';
import LVH_EventForm3 from './components/LVH_EventForm3';
import LVH_EventForm4 from './components/LVH_EventForm4';

 class App extends Component {
  render() {
    return (
      <div class='container'>
          <h1>Event Form Demo - Lê Văn Hoàng</h1>
          <LVH_EventForm1/>
          <LVH_EventForm2/>
          <LVH_EventForm3/>
          <LVH_EventForm4 name="Lê Văn Hoàng"/>
      </div>
    );
  }
}
export default App;