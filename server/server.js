const express = require('express'),
      app = express(),
      PORT = 8081

app.use('/build', express.static('build'))
app.use('/api/v1', express.static('data'))

app.get('*', (req, res) => {
  res.send(`
    <html>
      <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, width=device-width">
        <meta name="description" content="臺北市開放認養動物，想要找個寵物陪伴嗎？">
        <meta property="og:image" content="http://163.29.39.183/uploads/images/medium/26801a33-a6c2-4551-bd58-463cbd5ac2f7.jpg">
        <meta charset="UTF-8">
        <title>臺北市開放認養動物</title>
        <style>
          * { margin: 0px; padding: 0px; }
        </style>
      </head>
      <body>
        <div id='view'></div>
        <a href="https://github.com/madeinfree/pet-adoption"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"></a>
        <script src="https://use.fontawesome.com/ad988b0b42.js"></script>
        <script src='/build/bundle.js'></script>
      </body>
    </html>
  `)
})

app.listen(8081, () => console.log(`Server listen on port ${PORT}`))
