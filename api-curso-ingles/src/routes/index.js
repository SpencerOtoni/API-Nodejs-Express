import people from './people'
import classe from './classe'
import level from './level'
import enrollments from './enrollments'

export default (app) => {
    app.use(people)
    app.use(enrollments)
    app.use(classe)
    app.use(level)
}
