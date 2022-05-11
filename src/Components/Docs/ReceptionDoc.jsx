import React from 'react'
import { useSelector } from 'react-redux'



const ReceptionDoc = () => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer)

    return (
        <div>
            {/* {usersData
                .filter((record) => record.info.card_num === "433235")
                .map((record) => {
                    console.log(record)
                    return (
                        record.info.patient
                    )
                })} */}
        </div>
    )
}

export default ReceptionDoc
