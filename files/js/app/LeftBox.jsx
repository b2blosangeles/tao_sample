class LeftBox extends React.Component {
  constructor(props) {
	super(props);
	this.props = props;
	this.state = {list : []};
	// ReactDOM.TAO.register(this);
  }
  componentDidMount() {
	var me = this;  
	ReactDOM.TAO.list.Root.loadData({
	     type: 'POST',
	     url: '/api/Tao/API_PG.api?code=PGtables',
	     data: {},
	     dataType: 'JSON',
	     timeout: (6 * 1000),
	     success: function(resultData){
		  me.setState({list : resultData.data, _TM : new Date().getTime()});
	     },
	     error : function(err) { 
		     console.log('err');
	     }, 
	     spinner : me
	  });   
	  
  }
  componentDidUpdate(prevProps, prevState) {
	var me = this;
  }
  render() {
	  var me = this;
    return (
      <div className="border border-warning alert-warning rounded m-0 p-2">
	{ReactDOM.TAO.list.Root.showSpinner(me)}
	ALL TABLES :
        <ul>
          {this.state.list.map(function(item, i){
             return (<li>{item.tablename}</li>)
           })}
        </ul>
      </div>
    );
  }
}
