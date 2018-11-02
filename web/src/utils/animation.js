import React from 'react'

export const strToAnimationStyle = str =>
  str
    .split('')
    .map((char, key) => (!char.match(/[^\s]/) ? char : <span key={key}>{char}</span>))
