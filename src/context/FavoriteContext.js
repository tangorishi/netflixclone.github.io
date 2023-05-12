// import { createContext, useEffect, useState } from "react"
// import Pending from '../components/browse/pending/Pending'
// import { useContext } from 'react'
// import { AuthContext } from './AuthContext'
// import { db } from '../firebase/firebase'
// import { collection, onSnapshot } from 'firebase/firestore'

// export const FavoriteContext = createContext()

// export const FavoriteProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([])
//   const [isPending, setIsPending] = useState(false)
//   const { currentUser } = useContext(AuthContext)

//   useEffect(() => {
//     const getFavorites = async () => {
//       setIsPending(true)

//       try {
//         const snapRef = collection(db, `users/${currentUser.uid}/favorite`)

//         onSnapshot(snapRef, (snapshot) => {
//           setFavorites(
//             snapshot.docs.map(doc => {
//               return { id: doc.id, ...doc.data() }
//             })
//           )
//           setIsPending(false)
//         })
//       } catch (err) {
//         console.log(err.message);
//         setIsPending(false)
//       }
//     }

//     getFavorites()
//   }, [currentUser])

//   return (
//     <FavoriteContext.Provider value={favorites}>
//       {children}
//     </FavoriteContext.Provider>
//   )
// }