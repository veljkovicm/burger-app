import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawerm Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);


export default App;
