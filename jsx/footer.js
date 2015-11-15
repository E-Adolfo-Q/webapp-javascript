var CompFooter = React.createClass({
   render : function(){
      return(
      <div className="container">
        <p className="text-muted">@Footer</p>
      </div>
     );
   }
});

React.render(<CompFooter />,
	 document.getElementById('footContent'));