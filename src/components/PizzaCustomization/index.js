import React, { useState } from 'react'
import './style.css'

import { useRef } from 'react';
import {useNavigate } from 'react-router-dom';

const PizzaCustomization = () => {
    const [ingrediants,setIngrediants] = useState([])
    const navigate = useNavigate()

    const tomatoRef = useRef()
    const oliveRef = useRef()
    const mushroomRef = useRef()
    const basilRef = useRef()
    const pineAppleRef = useRef()
     


    function getCheckout(){
        navigate('/checkout',{state:ingrediants})
    }

    function onTommato(e) {
        // e.preventDefault()
        let vegetable = e.target.value
        setIngrediants((prevArray) => {
            if (e.target.checked === true) {
                if (vegetable == "tommato") {
                    tomatoRef.current.className = "tommato"
                } else if (vegetable == "olive") {
                    oliveRef.current.className = "olive"  
                }
                 else if (vegetable == "mushroom") {
                    mushroomRef.current.className = "mushroom"  
                }
                 else if (vegetable == "basil") {
                    basilRef.current.className = "basil"  
                }
                 else  if (vegetable == "pineapple") {
                    pineAppleRef.current.className = "pineapple"  
                }
                prevArray.push(e.target.value)
                return prevArray
            }

            else {
                if (prevArray.includes(e.target.value)) {
                    if (vegetable == "tommato") {
                        tomatoRef.current.className = "tommato d-none"
                    } else if (vegetable == "olive") {
                        oliveRef.current.className = "olive d-none"  
                    }
                    else if (vegetable == "mushroom") {
                        mushroomRef.current.className = "mushroom d-none"  
                    }
                     else if (vegetable == "basil") {
                        basilRef.current.className = "basil d-none"  
                    }
                     else  if (vegetable == "pineapple") {
                        pineAppleRef.current.className = "pineapple d-none"  
                    }
                    let index = prevArray.indexOf(e.target.value)
                    prevArray.splice(index,1)
                    return prevArray
                }
            }
        })
        console.log(ingrediants)
    }
    return (
        <>
            <div className='container'>
                <div className='pizza-box'>
                    <div className='bg-pizza'>
                        {/* <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/BaseCheese.png?raw=true' alt="bg-pizza"  width="50%"/> */}
                        <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/PizzaBase.png?raw=true' alt="pizabase"  className='pizza-base' width={360} />
                        <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Tomato.png?raw=true' alt="tommato" className='tommato d-none' ref={tomatoRef} width={370}  />
                        <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Mushroom.png?raw=true' alt="mushroom" className='mushroom d-none' ref={mushroomRef} width={370} />
                        <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Olive.png?raw=true' alt="olive" className='olive d-none' ref={oliveRef} width={370} />
                        <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Basil.png?raw=true' alt="basil" className='basil d-none' width={370} ref={basilRef}/>
                        <img src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Pineapple.png?raw=true' alt="pineapple" className='pineapple d-none' ref={pineAppleRef} width={370} />
                    </div>
                </div>
                <div className='requirements'>
                    <div className='checks'>
                        <div>
                        <input type="checkbox"  name="toppings" value="tommato" onChange={onTommato} />
                        <label>tomato</label>
                        </div>
                        <div>
                        <input type="checkbox"  name="toppings" value="olive" onChange={onTommato} />
                        <label>olive</label>
                        </div>
                        
                        <div>
                        <input type="checkbox"  name="toppings" value="mushroom" onChange={onTommato} />
                        <label>mushroom</label>
                        </div>
                       
                        <div>
                        <input type="checkbox"  name="toppings" value="basil" onChange={onTommato} />
                        <label>basil</label>
                        </div>
                        
                        <div>
                        <input type="checkbox"  name="toppings" value="pineapple" onChange={onTommato} />
                        <label>pineapple</label>
                        </div>
                        <div className='button'>
                    <button onClick={getCheckout}>Order</button>
                </div>
                       
                    </div>
                </div>

                
            </div>
           
        </>

    )
}

export default PizzaCustomization