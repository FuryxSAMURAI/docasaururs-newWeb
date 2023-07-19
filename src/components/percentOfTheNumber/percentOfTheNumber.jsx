import React, { useState } from "react";
import styles from './percentOfTheNumber.css'
import katex from 'katex'

function PercentOfTheNumber(){
    const [getPercent, setPercent] = useState(0)
    const [getNumber, setNumber] = useState(0)

    let result = (getPercent / 100) * getNumber
    const formula = `\\frac{${getPercent}\\%}{${100}\\%} \\times ${getNumber}`;
    const formulaText = `\\frac{Відсоток \\ у \\ \\%}{100\\%} \\times Число`;

    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
        setShowResult(true);
    };

    return(
        <div>
            <div className="container">
                <div className="title">Калькулятор для обрахунку відсотків від числа</div>
                <div className="input">
                    <label htmlFor="percent">Відсоток</label>
                    <input type="number" id="percent" onChange={(e)=>{setPercent(Number(e.target.value))}}/>
                </div>
                <div className="input">
                    <label htmlFor="number">Число</label>
                    <input type="number" id="number" onChange={(e)=>{setNumber(Number(e.target.value))}}/>
                </div>
                <button className="btn" onClick={handleButtonClick}>Порахувати</button>
            </div>
            {showResult && 
            <div className="result">
                <p>Рузультат:</p>
                <div><span>{getPercent}</span>% від чила <span>{getNumber}</span> =  <span dangerouslySetInnerHTML={{ __html: katex.renderToString(formula) }} /> = <span>{result}</span></div>
                <p>Формула: <span dangerouslySetInnerHTML={{ __html: katex.renderToString(formulaText) }} /></p>
            </div>}
        </div>
    )
}

export default PercentOfTheNumber;