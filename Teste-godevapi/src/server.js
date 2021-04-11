import app from './app'

app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Server started! Port: ${process.env.PORT}!`)
})
