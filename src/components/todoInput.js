import React from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    if(/^\s*$/.test(todo)) {
      return alert('Please enter the text!');
    } else {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder="New item title.."onChange={this.handleChange} />
        <button className="btn btn-primary"
                onClick={() => this.addTodo(this.state.value)}>></button>
      </div>
    );
  }
}
