var niu = {aa: 123};
class TAOApp extends React.Component {
  constructor(props) {
	super(props);
	  this.props = props;
	this.state = {val : '111'};
  }
  componentDidMount() {
	var me = this;
	$.ajax({
	     type: 'POST',
	     url: '/api/testRestful.api',
	     data: {},
	     dataType: 'JSON',
	     timeout: (6 * 1000),
	     success: function(resultData){
		  me.setState(resultData.data);
		     niu.aa = 789;
	     },
	     error : function(xhr, textStatus, error) { 
	     }
	  });   
  }
  render() {
    return (
      <span>
        Hello {this.state.hello} =-**-=> {this.props.param}
        <hr/> {this.state.v} <hr/>
      </span>
    );
  }
}
class COMApp extends React.Component {
  constructor(props) {
	super(props);
	this.state = {val : '111'};
  }
  componentDidMount() {
	var me = this;
	$.ajax({
	     type: 'POST',
	     url: '/api/testRestful.api',
	     data: {},
	     dataType: 'JSON',
	     timeout: (6 * 1000),
	     success: function(resultData){
		  me.setState(resultData.data);
		     niu.aa = 456;
		//  TAOApp.alert();   
	     },
	     error : function(xhr, textStatus, error) { 
	     }
	  });   
  }
  render() {
    return (
      <span>
        COMMAPP {this.state.hello} 
        <hr/> {this.state.v} <hr/>
      </span>
    );
  }
}
$(document).ready(function() {
	ReactDOM.render(
		<TAOApp param={niu.aa} />,
		document.body.appendChild( document.createElement( 'div' ) )
		// document.getElementById('bob')
	);
	
	ReactDOM.render(
		<COMApp param={niu.aa} />,
		document.body.appendChild( document.createElement( 'div' ) )
		// document.getElementById('bob')
	);
});

