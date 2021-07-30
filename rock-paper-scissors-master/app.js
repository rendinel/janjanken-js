const figure = [
    {
        images:"icon-rock.svg",
        name:"rock"
    },
    {
        images:"icon-paper.svg",
        name:"paper"
    },
    {
        images:"icon-scissors.svg",
        name:"scissors"
    }
]


const playBtn = document.getElementById('play')
const myScore = document.getElementById('my-score')
const pcScore = document.getElementById('pc-score')
const containerPc = document.getElementById('conatiner-pc')
const tie = document.getElementById('tie')
let tieArr = []
let userWinArr = []
let userLoseArr = []
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function playPc(){
    const containerPc = document.getElementById('container-pc')
    containerPc.innerHTML = ` `
    const randomNumber = Math.floor(Math.random() * figure.length)
    const image = document.createElement('img')
    image.setAttribute('src',`images/${figure[randomNumber].images}`)
    containerPc.appendChild(image)
    const pcFigure = figure[randomNumber].name

    const randomNumber2 = Math.floor(Math.random() * figure.length)
    const image2 = document.createElement('img')
    image2.setAttribute('src',`images/${figure[randomNumber2].images}`)
    containerPc.appendChild(image2)
    const yourFigure = figure[randomNumber2].name

    if(pcFigure === 'rock' && yourFigure === 'rock'){
        tieArr.push(1)
        tie.innerHTML = `Tie:${tieArr.reduce(reducer)}`
    } else if(pcFigure === 'paper' && yourFigure === 'paper') {
        tieArr.push(1)
        tie.innerHTML = `Tie:${tieArr.reduce(reducer)}`
    } else if(pcFigure === 'scissors' && yourFigure === 'scissors') {
        tieArr.push(1)
        tie.innerHTML = `Tie:${tieArr.reduce(reducer)}`
    } else if(pcFigure === 'rock' && yourFigure === 'paper') {
        userLoseArr.push(1)
        pcScore.innerHTML = `Pc score:${userLoseArr.reduce(reducer)}`
    }  else if(pcFigure === 'paper' && yourFigure === 'rock') {
        userWinArr.push(1)
        myScore.innerHTML = `User score:${userWinArr.reduce(reducer)}`
    } else if(pcFigure === 'paper' && yourFigure === 'scissors') {
        userWinArr.push(1)
        myScore.innerHTML = `User score:${userWinArr.reduce(reducer)}`
    } else if(pcFigure === 'scissors' && yourFigure === 'paper') {
        userLoseArr.push(1)
        pcScore.innerHTML = `Pc score:${userLoseArr.reduce(reducer)}`
    }  else if(pcFigure === 'rock' && yourFigure === 'scissors') {
        userLoseArr.push(1)
        pcScore.innerHTML = `Pc score:${userLoseArr.reduce(reducer)}`
    }  else if(pcFigure === 'scissors' && yourFigure === 'rock') {
        userWinArr.push(1)
        myScore.innerHTML = `User score:${userWinArr.reduce(reducer)}`
    }
}

playBtn.addEventListener('click',playPc)