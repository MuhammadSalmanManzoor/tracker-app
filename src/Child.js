import React, { useContext } from 'react';

import {transctionContext} from './transContext'

function Child() {
    let {transction} = useContext(transctionContext);
    console.log(transction)
    return (
      <div className="Container">
          <h1 className="Text-center">Expence Tracker</h1>
  
          <h3>Your Balence <br />$260.00</h3>
          <div className="Expence-container">
            <h4>INCOME <br />$500.00</h4>
            <h4>EXPENSE <br />$240</h4>
          </div>
          
            <h4>History</h4>
            <hr />
            <ul className='Transction-history'>
              {transction.map((transObj, ind)=>{
                return ( <li key={ind}>
                  <span>{transObj.desc}</span>
                  <span>{transObj.Amount}</span>
                </li>)
              })}
              
            </ul>
  
            <h4>Add New Transction</h4>
            <hr/>
             
            <form className='Transction-form'>
              <label>Enter Text<br/>
              <input type="text" required/>
              </label>
              <br/>
              <label>Amount<br/>
              <input type="number" required/>
              </label>
              <br/>
              <input type='Submit' value='Add Transction' />
            </form>
  
          
      </div>
    );
  }
  
  export default Child;
  