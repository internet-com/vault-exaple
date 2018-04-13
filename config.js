const VAULT_ADDR = 'https://vault.gigadomo.com:8200'
const VAULT_TOKEN = 'tokenhere: fdadfadfadafdfadf2-9326-6038-e050e9b2f9b1'

// set environment variable
process.env.VAULT_ADDR = VAULT_ADDR
process.env.VAULT_TOKEN = VAULT_TOKEN

let secret = {}
try {
	secret = require('vault-env/local')
} catch(error) {
	console.error('load valut fail', error.message)	
}

// no secret
secret.NO_NEED_SECRET = 'thisisnosecureparam'

module.exports = secret
