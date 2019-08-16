class Machine extends React.Component {
  render() {
    // let s1 = this.props.s1;
    // let s2 = this.props.s2;
    // let s3 = this.props.s3;
    const { s1, s2, s3 } = this.props;
    const outcome = s1 === s2 && s2 === s3;

    return (
      // let s3 = this.props.s3;
      <div>
        <h1>Slot Machines</h1>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>{Winner ? "won" : "Fail"}</p>
      </div>
    );
  }
}
