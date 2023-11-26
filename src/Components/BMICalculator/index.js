import { useState } from "react"

const BMICalculator = () => {

    const [weight, updateWeight] = useState('0')
    const [height, updateHeight] = useState('0')
    const [bmi, updateBmi] = useState('')

    const weightChanged = (event) => {
        updateWeight(event.target.value)
    }

    const heightChanged = (event) => {
        updateHeight(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const inputWeight = parseFloat(weight)
        const inputHeight = parseFloat(height)

        if(inputWeight > 300 || inputWeight < 1){
            alert('Height - valid value from 1.0-300.0')
        } else if(inputHeight < 0.1 || inputHeight > 3.0){
            alert('Weight - valid value from 0.1-3.0')
        } else{
            let calculatedBMI = inputWeight/inputHeight
            calculatedBMI = calculatedBMI.toFixed(1)
            updateBmi(calculatedBMI)
        }
    }

    return(
        <div>
            <h1>BMI calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>Weight (in Kg): </label>
                <input type="text" onChange={weightChanged} /> <br/>
                <label>Height (in meters): </label>
                <input type="number" onChange={heightChanged}  /> <br/>
                <button type="text" >Calculate BMI</button>
                <p>{bmi}</p>
            </form>
        </div>
    )
}

export default BMICalculator