import { useEffect, useState } from 'react'
import './Css/ExperienceForm.css'
const ExperienceForm=(props)=>{
  const [valu1,setvalue1] =  useState()
  const [valu2,setvalue2] =  useState()
  const [valu3,setvalue3] =  useState()
  const [valu4,setvalue4] =  useState("")
  const[vali,setvali] = useState(false)



useEffect(()=>{
 if(valu1 && valu2 && valu3 === true && valu4.length >=3)
{
 setvali(true)
}else{
  setvali(false)
}
},[valu1,valu2,valu3,valu4])

    return(<>
    <h2 className="experience_heading">Experience</h2>
    <p className='experience_para'>Tell us a bit about your professional experience</p>

    <div className='form'>
        <div className='content'>
     <ul>
        <li>How many years of relevant experience do you have?*</li>
        <p>How many years of experience directly relevant to the position you are applying htmlFor do you have?</p>
        <select className="form-select" aria-label="Default select example" onChange={(e)=>{setvalue1(e.target.value)}}>
  <option defaultValue>Choose</option>
  <option value="1">1 year</option>
  <option value="2">2 years</option>
  <option value="3">3 years</option>
  <option value="4">4 years</option>
  <option value="5">5 years</option>
</select>

<li>How many years of total professional experience do you have?*</li>
    <select className="form-select" aria-label="Default select example" onChange={(e)=>{setvalue2(e.target.value)}}>
  <option defaultValue>Choose</option>
  <option value="1">1 year</option>
  <option value="2">2 years</option>
  <option value="3">3 years</option>
  <option value="4">4 years</option>
  <option value="5">5 years</option>
</select>

<li>What domain is your expertise In?*</li>
<p>Select all that apply</p>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="Front End" id="Front_End" onChange={(e)=>{setvalue3(e.target.checked)}}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Front End
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="Back_End" id="Back_End" onChange={(e)=>{setvalue3(e.target.checked)}}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Back End
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="Databases" id="Databases" onChange={(e)=>{setvalue3(e.target.checked)}}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Databases
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="Algorithms" id="Algorithms" onChange={(e)=>{setvalue3(e.target.checked)}}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Algorithms
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="Architectures" id="Architectures" onChange={(e)=>{setvalue3(e.target.checked)}}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Architectures
  </label>
</div>


<li>Tell us about your expert skills?</li>
<p>which of the following skills do you consider yourself an expert in?</p>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Angular"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Angular
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Css"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Css
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id=".Net"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   .Net
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="HTML"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 HTML
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Java"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Java
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Javascript"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Javascript
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Node"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Node
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="React"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 React
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Vue"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Vue
  </label>
</div>

<li>Other Expert Skills?*</li>
<p>any other skills you consider yourself an expert in?Please add one skill oer line</p>
<div className="mb-2">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={(e)=>{setvalue4(e.target.value)}} required aria-describedby="inputGroupPrepend"></textarea>

     
  <div className="invalid-feedback">
        Please choose a username.
      </div>
</div>


<li>Are you familiar(but not an expert) in these skills?</li>
<p>Aside from expert skills,do you have some familiarity with the following skill?
   <br/> (Please do not select if you selected them as expert skills)
</p>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Angular"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Angular
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Css"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Css
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id=".Net"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   .Net
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="HTML"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 HTML
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Java"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Java
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Javascript"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Javascript
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Node"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Node
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="React"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 React
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Vue"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
 Vue
  </label>
</div>
<li>Any other Skills/Capabilties?</li>
<p>are these any other skills or capabilties,aside from what you shared already,
    that you want us to know about?feel free to add one per line</p>
<div className="mb-2">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
</div>

     </ul>
   
   
     </div>
    </div>
    <div className="row justify-content-end">
                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
                  <button type="button" className={`${props.state === 1 ? "btn btn-warning px-2 disabled" : "btn btn-warning px-2"}`} onClick={props.previous}>Previous</button>
                  <button type="button" className={`${props.state === 8 || !vali ? "btn btn-primary ms-2 disabled" : "btn btn-primary ms-2"}`} onClick={props.next}>Next</button>
                </div>  </div>

             
    </>)
}
export default ExperienceForm