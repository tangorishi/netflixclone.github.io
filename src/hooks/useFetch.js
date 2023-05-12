import { useState, useEffect } from 'react'
import axios from '../services/axios'

export const useFetch = (urls) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await axios.get(urls, {
          signal: controller
            .signal
        })

        if (!res.data || res.data.length === 0) {
          throw new Error(res.status.text)
        }

        setData(res.data.results.splice(0, 6))
        setIsPending(false)
        setError(null)

      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        }
        setError('Could not fetch media list')
        console.log(err.message);
        setIsPending(false)
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [urls])

  return { data, isPending, error }

}