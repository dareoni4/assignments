import React from 'react';
import AddForm from "./AddForm";
import { connect } from "react-redux";
import List from "./List";



function App(props) {
  return (
    <div>
      <AddForm />
    <List />
    </div>
  )
}



export default App;
