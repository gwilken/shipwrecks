import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store'
import Map from './components/Map'

import './index.scss';

ReactDOM.render(
  <Provider store={ store }>
      <Map />
  </Provider>, document.getElementById('root')
);

console.log(`

███████╗██╗  ██╗██╗██████╗ ██╗    ██╗██████╗ ███████╗ ██████╗██╗  ██╗
██╔════╝██║  ██║██║██╔══██╗██║    ██║██╔══██╗██╔════╝██╔════╝██║ ██╔╝
███████╗███████║██║██████╔╝██║ █╗ ██║██████╔╝█████╗  ██║     █████╔╝ 
╚════██║██╔══██║██║██╔═══╝ ██║███╗██║██╔══██╗██╔══╝  ██║     ██╔═██╗ 
███████║██║  ██║██║██║     ╚███╔███╔╝██║  ██║███████╗╚██████╗██║  ██╗
╚══════╝╚═╝  ╚═╝╚═╝╚═╝      ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                                     
███████╗██╗  ██╗██████╗ ██╗      ██████╗ ██████╗ ███████╗██████╗     
██╔════╝╚██╗██╔╝██╔══██╗██║     ██╔═══██╗██╔══██╗██╔════╝██╔══██╗    
█████╗   ╚███╔╝ ██████╔╝██║     ██║   ██║██████╔╝█████╗  ██████╔╝    
██╔══╝   ██╔██╗ ██╔═══╝ ██║     ██║   ██║██╔══██╗██╔══╝  ██╔══██╗    
███████╗██╔╝ ██╗██║     ███████╗╚██████╔╝██║  ██║███████╗██║  ██║    
╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    
                                                                     
https://www.gwilken.com/shipwrecks
`)
