import './App.css';
import React from 'react';
import MemoPage from './memo/MemoPage';

function App() {
  return ( 
    <div>
      <h1 className='bg-primary text-white display-4 text-center'>React</h1>
      <div className='container'>
        <h4 className='my-3 display-6 text-left'>Memo.</h4>
        <MemoPage/>
      </div>
    </div>
  );
}

export default App;
