class TAOApp extends React.Component {
  constructor(props) {
	super(props);
	console.log('====props===>');
	  console.log(props);
	this.props = props;
	ReactDOM.TAO.list[this.constructor.name] = this;
	this.state = {val : '111', bb : 'AAA'};
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
		  
	     },
	     error : function(xhr, textStatus, error) { 
	     }
	  });   
  }
  render() {
    return (
      <span>
        Hello {this.state.hello} -XX- {this.state.bb} 
        <hr/> {this.state.v} <hr/>
      </span>
    );
  }
}
class COMApp extends React.Component {
  constructor(props) {
	super(props);
	ReactDOM.TAO.list[this.constructor.name] = this;
	this.state = {val : '111', bb : 'BBB'};
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
		ReactDOM.TAO.list.TAOApp.setState({bb : 'CCCC'});
	     },
	     error : function(xhr, textStatus, error) { 
	     }
	  });   
  }
  render() {
    return (
      <span>
        COMMAPP {this.state.hello} -&&- {this.state.bb} 
        <hr/> {this.state.v} <hr/>
      </span>
    );
  }
}
$(document).ready(function() {
	ReactDOM.TAO.load('Tao', <TAOApp param={{}} />, document.getElementById('doc'));
	ReactDOM.TAO.append('COM', <COMApp param={{}} />, document.body);
});

