import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore'



export const useCollection = (coll) => {
  const [isPending, setIsPending] = useState(false)
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, coll)

    setIsPending(true)

    
    const unSub = onSnapshot(ref, (snapshot) => {
     

      let results = []

      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      setDocuments(results)
      setIsPending(false)
    })


    return () => unSub()
  }, [coll, setDocuments])

  return { documents, isPending }

}