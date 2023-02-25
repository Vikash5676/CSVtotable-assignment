import React from 'react'
import { IndividualData } from './IndividualData'

export const Data = ({excelData,currentPage}) => {
    return excelData.map((individualExcelData,i)=>(
        i<=(currentPage*10)-1 && i>=(currentPage-1)*10?
        <tr key={i}>
            <IndividualData individualExcelData={individualExcelData}/>
        </tr> :""
            
        
               
    ))
}
