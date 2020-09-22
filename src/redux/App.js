import React from 'react';
import Widget1 from './views/widget1';
import Widget2 from './views/widget2';

function App() {
  console.log("root rerender");
  return (
    <>
      <Widget1 />
      <Widget2 />
    </>
    
  );
}

export default App;
