const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log(`servidor corriendo en puerto ${4000}` )
})