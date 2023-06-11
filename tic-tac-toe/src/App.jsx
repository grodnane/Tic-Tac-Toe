import { useState, useEffect } from 'react'
import './App.css'
import {Square} from './components/Square'
import  {TURNS} from './constants'
import {checkWinner} from './utils/checkWinner'
import { Modal } from './components/Modal'
import confetti from 'canvas-confetti'
import {Board}  from './components/Board'



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const handleReset = ()=>{ 
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  const checkEndGame=(newBoard)=>{
    return newBoard.every((square)=>square !==null)
  }
  
const updateBoard = (index)=>{
  //no actualizamos si en la posicion ya existe un valor o si hay un ganador
  if(board[index] || winner){return}
  //actualiza el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
  //cambia el turno
  setTurn(turn===TURNS.X?TURNS.O:TURNS.X)
  //revisa si hay un ganador
  const newWinner = checkWinner(newBoard)
  if(newWinner){
    setWinner(newWinner)
    confetti()
}else if(checkEndGame(newBoard)){
  setWinner(false)
  console.log(winner)

}}


  return (
    <main className='board'>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <h1 className='title'>TIC - TAC - TOE</h1>
      <section>
        <button onClick={handleReset}>Reset Game</button>
      </section>
      <section className='game'>
        <Board board={board} updateBoard={updateBoard}/>
      </section>
      <section className='turn'>
        <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
      </section>
          
      <Modal handleReset={handleReset} winner={winner}/>
    </main>
  )
}

export default App
