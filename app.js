const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
<<<<<<< HEAD
  console.log('server started on port 5000... Testings')
=======
  console.log('server started on port 5000.')
>>>>>>> 7854854848b958277b3b730a4058793d1fcbb64c
})
