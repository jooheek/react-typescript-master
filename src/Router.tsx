import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

//function Router({ toggleDark, isDark }: IRouterProps) {
//<Coin isDark={isDark}/>
//<Coins toggleDark={toggleDark} />
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
