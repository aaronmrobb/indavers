export function startGame() {
  return {
    type: 'START_GAME'
  }
}

export function next() {
  return {
    type: 'NEXT'
  }
}

export function shootWord(word) {
  return {
    type: 'SHOOT_WORD',
    word: word
  }
}
