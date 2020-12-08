import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useOutsideClick } from '../src/index';

const App = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => {
    console.log('hello');
  };

  useOutsideClick(ref, handleOutsideClick);

  return <div ref={ref} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
