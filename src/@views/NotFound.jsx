import { Navigate } from 'react-router-dom'
import routes from './routes'

const NotFound = () => <Navigate to={routes.STORIES} />

export default NotFound
