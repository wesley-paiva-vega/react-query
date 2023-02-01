import Home from '$/pages/Home';

import { globalCss } from './theme';

const Main = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

function App() {
  return (
    <div className={Main()}>
      <Home />
    </div>
  );
}

export default App;
