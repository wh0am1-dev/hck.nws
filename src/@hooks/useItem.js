import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getItem, getOG } from '../@store/api'
import { addSnack } from '../@store/app'

export const useItem = id => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({})
  const [og, setOG] = useState(undefined)

  useEffect(() => {
    setLoading(true)
    setItem({})
    setOG(undefined)
    getItem({
      id,
      done: item => {
        setItem(item)
        setLoading(false)
        if (item?.url) {
          getOG({
            url: item.url,
            done: og =>
              setOG({
                ...og,
                url: og.url || item.url,
                title: og.title || item.title
              }),
            error: () => setOG({ url: item.url, title: item.title })
          })
        }
      },
      error: error => {
        setLoading('error')
        dispatch(addSnack({ error }))
      }
    })
  }, [id, dispatch, setLoading, setItem, setOG])

  return { loading, item, og }
}

export default useItem
