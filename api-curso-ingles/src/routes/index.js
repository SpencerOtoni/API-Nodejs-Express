import people from './person'
import enrollments from './enrollments'

export default (app) => {
    app.use(people)
    app.use(enrollments)
}
