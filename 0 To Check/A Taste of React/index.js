// Class Based Components
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    );
  }
}

// Functional Based Components
function Hello() {
  return <h2>Hello!!</h2>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));
