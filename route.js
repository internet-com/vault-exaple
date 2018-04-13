const { DATABASE_URL } = require('./config')

module.exports =  {
  test: () => {
    setTimeout(() => {
      console.log('now we print out again: ', DATABASE_URL)
    }, 3000)
    
    // console.log(PATH ? PATH.DATABASE_URL : 'no thing')
  }
}