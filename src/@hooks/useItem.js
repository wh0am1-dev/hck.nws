import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getItem, getOG } from '../@store/api'
import { addSnack } from '../@store/app'

export const useItem = id => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({})
  const [og, setOG] = useState()

  useEffect(() => {
    setLoading(true)
    getItem({
      id,
      done: item => {
        setItem(item)
        setLoading(false)
        if (item?.url) {
          getOG({
            url: item.url,
            done: og => {
              setOG(og)
              console.log(og)
            },
            error: () => setLoading(false)
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
