import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <form className="add-form" onSubmit={this.props.onAdd}>
        <input className="add-input" type="text" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
