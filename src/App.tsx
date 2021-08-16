import * as React from "react";
import { Logo } from './components/Logo';
import './App.scss';

const App: React.VoidFunctionComponent = () => (
  <>
    <div className="logo-container">
      <Logo />
    </div>
    <p className="text-contact">Orders or questions? <a href="mailto:strangehorizonrecs@gmail.com">Mail us</a></p>
  </>
);

export default App;
