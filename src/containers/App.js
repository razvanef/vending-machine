import React from 'react';
import './App.css';

import ProductsList from './ProductsList'
import Console from './Console'

function App() {
  return (
    <div className="container py-4 mx-auto row">
        <h2 className="col-sm-12 mb-4 pb-3 text-center border-bottom">Vending Machine</h2>
        <div className="col-sm-8">
            <ProductsList />
        </div>
        <div className="col-sm-4">
            <Console />
        </div>
    </div>
  );
}

export default App;
