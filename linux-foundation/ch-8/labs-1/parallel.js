const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents )
}

const opA = async (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = async (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = async (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

opA(print)
opB(print)
opC(print)

