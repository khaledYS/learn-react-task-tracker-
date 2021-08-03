import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

const Header = ({title}) => {
    return (
          <header>
                  <Link to="/">Home</Link>
                  <Link to="/Grade1">Grade1</Link>
                  <Link to="/Grade2">Grade2</Link>
                  <Link to="/Grade3">Grade3</Link>
          </header>  
    )
}
Header.defaultProps = {
    title : "its fkn works fkkk"
}
export default Header
