var CompNavbar = React.createClass({
    render : function(){
      return (
	   <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle button-mobile" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>           
            <a className="navbar-brand" href="#/">Titulo</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse" id="content-mobile">
            <ul className="nav navbar-nav navbar-right nav-center">
                <li>
                 <a href="#/">Home</a>
                </li> 
                <li>
                  <a href="#/services">Servicio</a>
                </li>
                <li>
                  <a href="#/pricing">Tabla de precio</a>
                </li>
                <li>
                  <a href="#/about">Acerca</a>
                </li>
                <li>
                  <a href="#/faq">FAQ</a>
                </li>
                <li>
                 <a href="#/contact">Contacto</a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown">Blog <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                     <li>
                       <a href="#/blog">List of Posts</a>
                      </li>
                      <li>
                        <a href="#/blog/post">View One Post</a>
                      </li>
                  </ul>
                </li>              
            </ul>
        </div>       
      </div>
      );   
    }
});

React.render(<CompNavbar />,
	 document.getElementById('navContent')
);

