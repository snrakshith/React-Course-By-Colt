class Friend extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.hobbies.map(h => (
            <li>{h}</li>
          ))}
        </p>
      </div>
    );
  }
}
