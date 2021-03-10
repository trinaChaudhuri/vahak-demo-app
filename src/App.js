import React from 'react';
//components
import Header from './components/header';
import CarDetails from './components/car-details';
//style
import './App.css'
export default function App(){
    return(
        <div className="parentcontainer">
            <Header />
            <CarDetails />
        </div>
    )
}