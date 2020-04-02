import React from 'react';
import VoteForm from './components/VoteForm'
function App() {
  const Data = {
    title: 'gender',
    state: ["windows","macos", "linux", "other"],
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };

  return (
    <div className="App">
      <VoteForm title={Data.title} elems={Data.state}/>
    </div>
  );
}

export default App;
