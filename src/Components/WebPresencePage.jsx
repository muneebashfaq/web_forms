import { useEffect, useState } from 'react'
import './Css/webPresencePage.css'
const WebPresencePage=(props)=>{
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
    <h2 className="experience_heading">Web Presence</h2>
    <p className='experience_para'>If you would be so kind to share,we would like to learn more about you through your web presence</p>
    <div className='form'>
        <div className='content'>
     <ul>
      
<li>LinkedIn?*</li>
<p>Do you have a LinkedIn profile?if so,please enter it below.</p>
<div className="mb-2">
  <input class="form-control" type="text" placeholder="" aria-label="Disabled input example"  onChange={(e)=>{setvalue1(e.target.value)}}/>
</div>

<li>Facebook?*</li>
<p>Are you on Facebook?Care to share your profile address?</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example"  onChange={(e)=>{setvalue2(e.target.value)}}/>
</div>

<li>Twitter?</li>
<p>Do you tweet?Mind sharing your twitter handle url?
</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
</div>

<li>GitHub?</li>
<p>As a developer,it is highly valuable if you have and share your GitHub profile?</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
</div>


<li>Personal Website or Blog?</li>
<p>Do you have your own website and/or blog?if so,we would love to check it out.</p>
<div className="mb-2">
<input class="form-control" type="text" placeholder="" aria-label="Disabled input example" />
</div>

<li>Any other references?</li>
<p>Do you have any other references you would like to share?Mentions your<br/>
work,articles,or any other relevant references you would like to share?Feel free<br/>
 to enter one url per line</p>
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
export default WebPresencePage