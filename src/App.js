import { useState } from "react";
import { Data } from "./Components/Data";
import { useCSVReader } from "react-papaparse";

function App() {
  //styles
  const styles = {
    csvReader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      marginTop:10,
    } ,
    browseFile: {
      width: '20%',
    },
    acceptedFile: {
      border: '1px solid #ccc',
      height: 45,
      lineHeight: 2.5,
      paddingLeft: 10,
      width: '80%',
    } ,
    remove: {
      borderRadius: 0,
      padding: '0 20px',
    },
    progressBarBackgroundColor: {
      backgroundColor: 'red',
    },
  };
  
  // on change states
  const { CSVReader } = useCSVReader();
  // submit
  const [excelData, setExcelData] = useState(null);
  const [pagelength, setPagelength] = useState(0);
  const [currentPage, setCurrentPage] =useState(1)
  // on click event
  const handleRemove=()=>{
    setExcelData(null)
    setPagelength(0)
    setCurrentPage(1)
  }
  const handleChange=(e)=>{
    console.log(e.target.value)
    setCurrentPage(parseInt(e.target.value))
  }
  const handlePaginate=(e)=>{
    setCurrentPage(e)
  }
  const handleNext=()=>{
    setCurrentPage(currentPage+1)
    console.log(currentPage)
  }
  const handlePrevious=()=>{
    setCurrentPage(currentPage-1)
    console.log(currentPage)
  }


  return (
    <div className="container">
      {/* upload file section */}
      <div >
        <CSVReader
          onUploadAccepted={(results) => {
            if(results){
              console.log(result)
              setPagelength(parseInt((results.data.length/10)+1))
              setExcelData(results.data)
            }
          }}
          
        >
          {({
            getRootProps,
            acceptedFile,
            ProgressBar,
            getRemoveFileProps,
          }) => (
            <>
              <div style={styles.csvReader}>
                <button className="btn btn-success"
                  type="button"
                  {...getRootProps()}
                  style={styles.browseFile}
                >
                  Browse file
                </button>
                <div style={styles.acceptedFile}>
                  {acceptedFile && acceptedFile.name}
                </div>
                <button className="btn btn-danger"{...getRemoveFileProps()} style={styles.remove} >
                  Remove
                </button>
              </div>
              <ProgressBar style={styles.progressBarBackgroundColor} />
              <button className="btn btn-danger" onClick={handleRemove}>Clear</button>
            
            </>
          )}
        </CSVReader>
      </div>

      <br></br>
      <hr></hr>

      {/* view file section */}
      <h5>View Excel file</h5>
      <nav aria-label="Page navigation example">
      <ul class="pagination float-end">
        <li class="page-item"><a class="page-link" href="#" onClick={handlePrevious}>Previous</a></li>
        
          <li class="page-item"><a class="page-link" href="#" onClick={()=>handlePaginate(1)}>1</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={()=>handlePaginate(2)}>2</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={()=>handlePaginate(3)}>3</a></li>
          <li class="page-item"><input type="number" class="page-link" style={{width:"4rem"}} onChange={handleChange} placeholder={currentPage}/></li>
        <li class="page-item"><a class="page-link" href="#" onClick={handleNext}>Next</a></li>
        </ul>
      </nav>
      <div className="viewer" style={{marginTop:"4rem"}}>
        {excelData === null && <>No file selected</>}
        {excelData !== null && (
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <Data excelData={excelData} currentPage={currentPage}/>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
