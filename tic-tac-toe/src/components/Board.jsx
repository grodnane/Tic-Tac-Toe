import { Square } from "./Square"
import '../App.css'

export function Board({board, updateBoard}){ 
  
  return board.map((_,i)=>{
    
    return (
      <Square updateBoard={updateBoard} key={i} index={i}>
        {board[i]}
      </Square>)})}