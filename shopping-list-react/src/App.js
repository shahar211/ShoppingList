import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingList from "./pages.js/shoppingList";
import EndOrder from './pages.js/EndOrder';

function App() {
  return (
    <Router>
      <div style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
      }}>
        <Routes>
          <Route exact path="/" element={<ShoppingList />} />
          <Route exact path="shopping-list" element={<ShoppingList />} />
          <Route exact path="end-order" element={<EndOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
