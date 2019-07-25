import React from 'react';
import ReactDOM from 'react-dom';
import RouletteGun from './state-drills/RouletteGun';
import Bomb from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import './index.css';

ReactDOM.render(
    <div>
        <RouletteGun bulletInChamber={5}/>
        <Bomb />
        <HelloWorld />
    </div>
    , document.getElementById('root')
);
