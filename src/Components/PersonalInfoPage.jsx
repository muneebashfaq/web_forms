import { useEffect, useState } from 'react'
import './Css/PersonalInfoPage.css'
const PersonalInfoPage=(props)=>{
  const [valu1,setvalue1] =  useState("")
  const [valu2,setvalue2] =  useState("")
  
  const[vali,setvali] = useState(false)



useEffect(()=>{
 if((valu1.length >=3) && (valu2.length >= 3))
{
 
 setvali(true)
}else{
  setvali(false)
}
},[valu1,valu2])

    return(<>
    <h2 className="experience_heading">Personal Information</h2>
    <p className='experience_para'>Help us get to know you by answering the following questions</p>

    <div className='form'>
        <div className='content'>
     <ul>
      
<li>What is your first name?*</li>
<div className="mb-2">
  <input class="form-control" type="text" placeholder="" aria-label="Disabled input example"  onChange={(e)=>{setvalue1(e.target.value)}}/>
  
</div>

<li>...and last name?*</li>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example"  onChange={(e)=>{setvalue2(e.target.value)}}/>
</div>

<li>what is your phone number?</li>
<p>having your phone number will help us communicate quicker,especially during <br/>scheduling.but we respect
  your privacy and providing your phone number at this <br/>stage is optional
</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
</div>

<li>what is your country of residence?</li>
<p>where do you currently live?</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
</div>


<li>...and what city?</li>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
</div>

<li>What is your nationality?</li>
<p>what country are you citizen of?</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
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
export default PersonalInfoPage