
import {useState} from "react";
import './App3.css'
import Star from "./Star";

function StarMaker({quantity = 5, marked = 3}) {
const stars = [...Array(quantity).keys()]
console.log(stars)
    return (

            <div>
                {stars.map((star) => {
                    console.log(star)
                  return  <Star isMarked={star < marked} key={star}/>
                })}
            </div>

    )
}

export default StarMaker;