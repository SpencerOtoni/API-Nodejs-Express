import people from './people'
import enrollments from './enrollments'

export default (app) => {
    app.use(people)
    app.use(enrollments)
}
