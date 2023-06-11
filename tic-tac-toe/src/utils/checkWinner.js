import {winnerCondition} from '../constants'

export const checkWinner = (boardTCheck) =>{
    // @ts-ignore
    for(const condition of winnerCondition){
      const [a,b,c] = condition;
      if(boardTCheck[a] && boardTCheck[a]=== boardTCheck[b] && boardTCheck[a] === boardTCheck[c]){
        return boardTCheck[a]
      }
    }
    
    return null
  }