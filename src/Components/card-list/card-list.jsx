import React, { Component } from 'react';
import Card from '../Card/card';
import './card-list.css'
function Cardlist(props) {
    return (  <div className='card-list'>
       
        {props.monsters.map(monster =>(
      <Card key={monster.id}  monster={monster}  />   ))}
       
       
       
    

     
        
         </div> );

        }
export default Cardlist;