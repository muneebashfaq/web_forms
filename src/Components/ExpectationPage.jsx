const ExpectationPage=(props)=>{
    return(
        <>
        <h1>This Is Expectation Page</h1>
        <div className="row justify-content-end">
                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
                  <button type="button" className={`${props.state === 1 ? "btn btn-warning px-2 disabled" : "btn btn-warning px-2"}`} onClick={props.previous}>Previous</button>
                  <button type="button" className={`${props.state === 8  ? "btn btn-primary ms-2 disabled" : "btn btn-primary ms-2"}`} onClick={props.next}>Next</button>
                </div>  </div>        
        </>
    )
}
export default ExpectationPage