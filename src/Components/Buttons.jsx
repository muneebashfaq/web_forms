import './Css/Buttons.css'
const Buttons=(props)=>{
    return(<>
    <div className='row'>
                  <div className='col-3'>
                    <button className="button1" disabled style={{ backgroundColor: props.value===props.name?"#0D2461":props.value >= props.name?"rgb(58, 187, 105)":"rgb(243, 247, 255)",
                     border: props.value===props.name?" 2px solid #0D2461":props.value >= props.name?" 2px solid rgb(58, 187, 105)":" 2px solid #0D2461",
                     color: props.value===props.name?"white":props.value >= props.name?"white":"rgb(8, 21, 56)" }}  onClick={props.func}>{props.name}</button>
                  </div>
                  <div className='col-9'><p className='side_info'>{props.title}</p></div>
                  <h1 className="h1"></h1>
                  </div>     
 
    </>)
}
export default Buttons