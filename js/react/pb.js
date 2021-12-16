
const e = React.createElement;

class MyComponent extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        render: false
      };
      this.pbCouse = this.pbCouse.bind(this);
    }
  
    componentDidMount() {
      fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it is important to handle errors here, not in the block catch(),
          // so as not to catch exceptions from errors in the components themselves.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    
    pbCouse() {
      this.setState({render: !this.state.render});
    }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        if (!this.state.render) {
          return(
              <button onClick={this.pbCouse}>Show courses</button>
          );  
        }else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.ccy}/{item.base_ccy} (Buy: {item.buy} - Sale: {item.sale} ) 
                </li>
              ))}
            </ul>
          );
        }
      }
    }
  }

 
const domContainer = document.querySelector('#pbcourse');
ReactDOM.render(e(MyComponent), domContainer);