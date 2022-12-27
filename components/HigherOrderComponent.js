import React, { Component } from "react";

class HigherOrderFunctions extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => {
      return (
        <div key={item.id}>
          <li className="list-elements">
            <span> Id: {item.id} </span>
            <span> Name: {item.name} </span>
            <span> User Type: {item.user_type} </span>
          </li>
        </div>
      );
    });
    return mapRows;
  };
  renderUserType = () => {
    const data = this.state.userData;
    const user_type = data.filter((name) => {
      return name.user_type === "Designer"
    }).map((items)=>{
      return (
        <React.Fragment key={items.id}>
        <li>
          <span> Id: {items.id} </span>
          <span> Name: {items.name} </span>
          <span> User type: {items.user_type} </span>
        </li>
      </React.Fragment>
      )
    })
    return user_type;
  }
  renderUserName = () => {
    const data = this.state.userData;
    const user_type = data.filter((name) => {
      return name.name[0] === 'J'
    }).map((items)=>{
      return (
        <React.Fragment key={items.id}>
        <li>
          <span> Id: {items.id} </span>
          <span> Name: {items.name} </span>
          <span> User type: {items.user_type} </span>
        </li>
      </React.Fragment>
      )
    })
    return user_type;
  }
  renderUserAge = () => {
    const data = this.state.userData;
    const user_type = data.filter((name) => {
      return name.age >= 28 || name.age <= 50
    }).map((items)=>{
      return (
        <React.Fragment key={items.id}>
        <li>
          <span> Id: {items.id} </span>
          <span> Name: {items.name} </span>
          <span> User type: {items.user_type} </span>
          <span> Age: {items.age}</span>
        </li>
      </React.Fragment>
      )
    })
    return user_type;
  }
  DesignerExperience = () => {
    const data = this.state.userData;
    var Exp = 0;
    data.filter((name) => {
      return name.user_type === "Designer"
    }).forEach((items)=>{
      Exp += items.years;
    })
    return Exp;
  }
  render() {
    return (
      <div>
        <div className="display-box">
          <ul>{this.DesignerExperience()}</ul>
        </div>
      </div>
    );
  }
}

export default HigherOrderFunctions;
