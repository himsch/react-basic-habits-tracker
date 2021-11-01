import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = habit => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const result = habits[index].count - 1;
    habits[index].count = result < 0 ? 0 : result;
    this.setState({ habits });
  };

  handleDelete = habit => {
    console.log(`handleDelete ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      return item.count === 0 ? { ...item } : { ...item, count: 0 };
    });
    this.setState({ habits });
  };

  handleAddHabit = event => {
    event.preventDefault();
    const name = event.target[0].value;
    const habits = [...this.state.habits];
    habits.push({ id: Date.now(), name, count: 0 });
    event.target[0].value = '';
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.reduce(
            (prev, curr) => prev + curr.count,
            0
          )}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAddHabit}
        />
      </>
    );
  }
}

export default App;
