var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('Ya sabia que querias ser mi novia');
});

/*
 * A simple React component
 */
class Application extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      animationClass: 'test'
    }
    this.changeState = this.changeState.bind(this);
  }
  
  changeState(){
    if(this.state.animationClass === 'test'){
      this.setState({
        animationClass: 'test paused'
      });
    }else{
      this.setState({
        animationClass: 'test'
      });
    }
  }
  render() {
    return <div className={this.state.animationClass}>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));
