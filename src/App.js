import React from 'react';
import Form from './components/Form';
import ListItens from './components/ListItens';
import ProvideContext from './context/ProvideContext';

function App() {
  return (
    <ProvideContext>
      <Form />
      <ListItens />
    </ProvideContext>
  );
}

export default App;
