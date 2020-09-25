import React from 'react'
import { Redirect } from 'react-router-dom'
import { routes } from '@app'

const NotFound = () => <Redirect to={routes.STORIES} />

export default NotFound
