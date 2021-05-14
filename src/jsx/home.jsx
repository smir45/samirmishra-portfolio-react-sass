import React from 'react';
import NavBar from './navbar';
import ContentBox from './content-box';

export default function Home(){
    return(
        <div className="home-main-container">
            <section><NavBar /></section>
            <section><ContentBox /></section>
        </div>
    );
}