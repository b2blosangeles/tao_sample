ReactDOM.TAO = new Object();
ReactDOM.TAO.list = {};
ReactDOM.TAO.append = function(id, obj, pobj) {
    obj.props.TAOID = id;
    ReactDOM.render(obj, pobj.appendChild( document.createElement( 'div' )));
}
ReactDOM.TAO.load = function(id, obj, pobj) {
    obj.props.TAOID = id;
    ReactDOM.render(obj, pobj);
}
