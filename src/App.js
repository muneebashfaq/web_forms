import './Components/Css/App.css'
import Header from './Components/Header';
import ExperienceForm from './Components/ExperienceForm'
import { useState, useEffect } from 'react';
import Buttons from './Components/Buttons';
import WelcomePage from './Components/WelcomePage';
import PersonalInfoPage from './Components/PersonalInfoPage';
import WebPresencePage from './Components/WebPresencePage';
import EducationPage from './Components/EducationPage';
import ExpectationPage from './Components/ExpectationPage';
import DocumentsPage from "./Components/DocumentsPage"
import SummaryPage from "./Components/SummaryPage"

function App() {
  const [state, setState] = useState(1);
  const [display, setDisplay] = useState();

  const next = () => {
    setState(state + 1)
  }

  const previous = () => {
    setState(state - 1)
  }

  useEffect(() => {
    if (state === 1) {
      setDisplay(<WelcomePage  state={state} next={next} previous={previous}/>)
    }
    else if (state === 2) {
      setDisplay(<PersonalInfoPage  state={state} next={next} previous={previous}/>)
    }
    else if (state === 3) {
      setDisplay(<WebPresencePage  state={state} next={next} previous={previous}/>)
    }
    else if (state === 4) {
      setDisplay(<ExperienceForm  state={state} next={next} previous={previous}/>)
    }
    else if (state === 5) {
      setDisplay(<EducationPage  state={state} next={next} previous={previous}/>)

    }
    else if (state === 6) {
      setDisplay(<ExpectationPage  state={state} next={next} previous={previous}/>)

    }
    else if (state === 7) {
      setDisplay(<DocumentsPage  state={state} next={next} previous={previous}/>)

    }
    else if (state === 8) {
      setDisplay(<SummaryPage  state={state} next={next} previous={previous}/>)

    }

  },[state])

  return (
    <>
      <Header />
      
      <div className="container-fluid">
        <div className="container">
          <div className="row">
          <div className="col-md-2 offset-1 order-xl-2 order-lg-2 order-md-2 order-sm-1 order-xs-1">
              <div className="button_groups">
                <div className='row'> 
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2 col-xs-2'>
              <Buttons name={1} func={()=> { setState(1) }} value={state} title="Welcome" />
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2 col-xs-2'>
              <Buttons name={2} func={()=> { setState(2) }} value={state} title="Personal Information"/>        
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2'>
              <Buttons name={3} func={()=> { setState(3) }} value={state} title="Web Presence"/>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2'>
              <Buttons name={4} func={()=> { setState(4) }} value={state} title="Experience"/>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2'>
              <Buttons name={5} func={()=> { setState(5) }} value={state} title="Education"/>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2'>
              <Buttons name={6} func={()=> { setState(6) }} value={state} title="Expectations"/>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2'>
              <Buttons name={7} func={()=> { setState(7) }} value={state} title="Supporting Documents"/>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-2'>
              <Buttons name={8} func={()=> { setState(8) }} value={state} title="Summary"/>
              </div>
              </div>
              </div>
            </div>
            
            <div className="col-md-9 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-xs-2">
              {display}
            </div>

        
          </div>
        </div>
      </div>
 
        </>
  );
}

export default App;
