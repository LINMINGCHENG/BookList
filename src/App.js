import React from 'react';
import BookContextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import './App.css';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
       <BookContextProvider>
             <Navbar/>
             <BookList/>
             <NewBookForm/>
       </BookContextProvider>
    </div>
  );
}

export default App;
