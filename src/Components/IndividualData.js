import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData[0]}</th>
            <th>{individualExcelData[1]}</th>
            <th>{individualExcelData[2]}</th>
            <th>{individualExcelData[3]}</th>
            <th>{individualExcelData[4]}</th>
            <th>{individualExcelData[5]}</th>
            <th>{individualExcelData[6]}</th>
            <th>{individualExcelData[7]}</th>
            <th>{individualExcelData[8]}</th>
        </>
    )
}
