import React from 'react';
import Toolbar from '../../components/Toolbar';
import Keypad from '../../components/Keypad';
const ToolbarLayout = () => {
  return (
    <Toolbar
      right={
        <Keypad>
          <div>Boton</div>
        </Keypad>
      }
    />
  );
};

export default ToolbarLayout;
