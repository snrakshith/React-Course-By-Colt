// Class Based Components
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          from="John"
          to="Doe"
          img=""
          num={3}
          date={[1, 2, 3]}
          isFunny={true}
        />
        <Hello from="Carri" to="Smith" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
