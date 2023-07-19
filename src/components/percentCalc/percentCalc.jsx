import React, { useState } from "react";
import styles from './percentCalc.css'
import 'katex/dist/katex.min.css';
import katex from 'katex';

function PercentCalc(){
    const [price, setPrice] = useState(0);
    const [percent, setPercent] = useState(0);

    let percentSize = (price * percent)/100
    let priceWithDiscount = price - percentSize

    return(
        <div className="container">
            <div className='title'>Калькулятор знижок</div>
            <div>
                <div className='input'>
                    <label htmlFor="startPrice">Початкова ціна</label>
                    <input type="number" id="startPrice" onChange={(e)=>{setPrice(Number(e.target.value))}} />
                </div>
                <div className='input'>
                    <label htmlFor="pricePercent">Відсоток знижки</label>
                    <input type="number" inputMode="pricePercent" onChange={(e)=>{setPercent(Number(e.target.value))}} />
                </div>
                <button className="btn">Обрахувати знижку</button>
            </div>
            <div className="result">
                <p>Рузультат:</p>
                <div><span>Ціна без знижки: </span><span>{price}</span></div>
                <div><span>Знижка у відсотках: </span><span>{percent}<sup>%</sup></span></div>
                <div><span>Розмір знижки: </span><span>{percentSize}</span></div>
                <div><span>Ціна зі знижкою: </span><span>{priceWithDiscount}</span></div>
                <div>Формула: <span dangerouslySetInnerHTML={{ __html: katex.renderToString('\\frac{\\text{стара ціна} \\times \\text{розмір знижки в \\%}}{100\\%}') }} /></div>
            </div>
        </div>
    )
}

export default PercentCalc;