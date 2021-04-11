import db from '../config/database'
import AppError from '../app/errors/AppError'

export default (async () => {
    try {
        await db.mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
    } catch (err) {
        throw new AppError(err)
    }
})()
