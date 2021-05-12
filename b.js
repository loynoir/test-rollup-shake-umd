import esprima from 'esprima'

// declared here but will NOT be imported elsewhere
export const esprimaParse = (s)=>esprima.parse(s)

export const foo = 'bar'
