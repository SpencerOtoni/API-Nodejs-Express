import app from './app'

app.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Server started! Port: 3000!')
})
