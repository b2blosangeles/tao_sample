class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
$(document).ready(function() {
  ReactDOM.render(
    <HelloMessage name="BOB" />,
    document.getElementById('bob')
  );
/*---4---*/
  ReactDOM.render(
    <HelloMessage name="DOCr" />,
    document.getElementById('doc')
  );
});
