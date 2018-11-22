import React from 'react'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import Counter from './Counter'
import Navigation from './Navigation/Navigation'

const App = (props) => (
  <div>
    <Router>
      <div>
      <Navigation title="ePla">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>
    </Navigation>
        <Navigation title="ePla">
          <Link to='/'>
            <MenuItem>
              Home
          </MenuItem>
          </Link>
          <Link to='/counter'>
            <MenuItem>
              Counter
          </MenuItem>
          </Link>
        </Navigation>
        <div>
          <Route path="/counter" component={() => <Counter startNumber={5} />} />
        </div>

 </div>
     </Router>
   </div>
 )
 
 export default App