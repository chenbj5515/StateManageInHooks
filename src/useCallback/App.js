import React from 'react';
// import Widget1 from './views/widget1';
import Widget2 from './views/widget2';
// import Widget3 from './views/Child'

function App() {
  console.log("root rerender");
  return (
    <>
      {/* <Widget1 /> */}
      <Widget2 />
      {/* <Widget3 /> */}
    </>
    
  );
}

export default App;
