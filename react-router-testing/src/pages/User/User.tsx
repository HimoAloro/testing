import { useParams } from "react-router-dom"

export const User=()=>{

    const {userID, userName} = useParams()

    return(
        <>
        <div>Użytkownik numer: {userID}</div>
        <div>Nazwa użyszkodnika: {userName}</div>
        </>
    )
} 