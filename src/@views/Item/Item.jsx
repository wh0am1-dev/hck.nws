import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { getItem } from '@store/api'
import { addSnack } from '@store/app'
import { Loading } from '@components'
import useStyles from './Item.styles'

const Item = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const classes = useStyles()

  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({})

  useEffect(() => {
    setLoading(true)

    getItem({
      id,
      done: item => {
        setLoading(false)
        setItem(item)
      },
      error: error => {
        setLoading('error')
        dispatch(addSnack({ message: `${error.name}: ${error.message}`, variant: 'error' }))
      }
    })
  }, [id, dispatch])

  if (loading === 'error') return <Redirect to='/error' />
  if (loading) return <Loading />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title={item.title} />
      <pre>
        <code>{JSON.stringify(item, null, 2)}</code>
      </pre>
    </Container>
  )
}

export default Item
