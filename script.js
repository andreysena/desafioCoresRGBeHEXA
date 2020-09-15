window.addEventListener("load", start)

let redRange = document.getElementById("redRange")
let greenRange = document.getElementById("greenRange")
let blueRange = document.getElementById("blueRange")
let redNumber = null 
let greenNumber = null
let blueNumber = null
let redInput = document.getElementById("redInput")
let greenInput = document.getElementById("greenInput")
let blueInput = document.getElementById("blueInput")
let squareDiv = document.getElementById("squareDiv")
let hexaText = document.getElementById("hexaText")
let rgbText = document.getElementById("rgbText")

function start(){

    redRange.addEventListener("input", handleRangeChange)
    greenRange.addEventListener("input", handleRangeChange)
    blueRange.addEventListener("input", handleRangeChange)

    generateRandomColor()
}

function handleRangeChange(event){

    if(event.target.id === "redRange"){
        redNumber = event.target.value

    }else if(event.target.id === "greenRange"){
        greenNumber = event.target.value

    }else{
        blueNumber = event.target.value
    }

    handleChangeObjects(redNumber, greenNumber, blueNumber)
}

function generateRandomColor(){
    redNumber = Math.floor(Math.random() * 255 + 1)
    greenNumber = Math.floor(Math.random() * 255 + 1)
    blueNumber = Math.floor(Math.random() * 255 + 1)

    handleChangeObjects(redNumber, greenNumber, blueNumber)
}

function handleChangeObjects(redValue, greenValue, blueValue){

    redRange.value = redValue
    redInput.value = redValue

    greenRange.value = greenValue
    greenInput.value = greenValue

    blueRange.value = blueValue
    blueInput.value = blueValue

    squareDiv.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    squareDiv.style.color = `${defineTextColor(redValue, greenValue, blueValue)}`
    hexaText.textContent = `#${genereteHexaCode(redValue, greenValue, blueValue)}`
    rgbText.textContent = `rgb(${redValue}, ${greenValue}, ${blueValue})`

}

function genereteHexaCode(redValue, greenValue, blueValue){
    let firstPart, secondPart = undefined

    let hexaSimbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                       "A", "B", "C", "D", "E", "F"]

    let rgbValues = [redValue, greenValue, blueValue]

    let hexaCode = []

    for(i = 0; i < 3; i++){

        if(rgbValues[i] < 10){
            firstPart = 0
            secondPart = rgbValues[i]
        }else{

            let b1 = Math.floor(rgbValues[i]/16)
            let b2 = rgbValues[i]%16
    
            if(b1 > 9 && b2 > 9){
                firstPart = hexaSimbols[b1]
                secondPart = hexaSimbols[b2]
            }else if(b1 > 9){
                firstPart = hexaSimbols[b1]
                secondPart = b2
            }else if(b2 > 9){
                firstPart = b1
                secondPart = hexaSimbols[b2]
            }else{
                firstPart = b1
                secondPart = b2
            }
        }

        hexaCode.push(firstPart)
        hexaCode.push(secondPart)
    }

    return hexaCode.join("")
}

function defineTextColor(redValue, greenValue, blueValue){
    let textColor = undefined

    if(redValue > 127 || greenValue > 127 || blueValue > 127){
        textColor = "#000"
    }else if(redValue < 127 || greenValue < 127 || blueValue < 127){
        textColor = "#FFF"
    }

    return textColor
}