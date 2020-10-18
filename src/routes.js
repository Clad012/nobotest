import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/views/Home'
import Programme1 from './components/views/Programme1'
import Programme2 from './components/views/Programme2'
import History from './components/views/History'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/programme-1" component={Programme1} />
      <Route exact path="/programme-2" component={Programme2} />
      <Route exact path="/historique" component={History} />

      <Route component={() => <div>Non trouvé</div>} />
    </Switch>
)

export default Routes