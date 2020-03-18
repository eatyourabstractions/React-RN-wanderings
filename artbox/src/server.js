const express = require('express')
const app = express()
const router = express.Router()


app.use(express.json())

router.get('/', async (req, res) => {
    res.status(500).json({hello:"world"})
  })

  app.listen(3001, () => console.log('server started'))
