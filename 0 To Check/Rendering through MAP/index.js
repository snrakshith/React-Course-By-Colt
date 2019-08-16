// Class Based Components
class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Rita" hobbies={["football", "baseball"]} />
        <Friend name="Rithu" hobbies={["chess", "basketball"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
