class Hello extends React.Component {
  render() {
    let num = "!".repeat(this.props.num);
    return (
      <div>
        <h1>
          Hello {this.props.from} from {this.props.to} {num}..
        </h1>
        <img src={this.props.img} />
      </div>
    );
  }
}
