import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Register=()=>{
   
    const[Employee, setEmployee]=useState({
        EmployeeCode:"",
        EmployeeName:"",
        CTC:"",
        Basic:"",
        PF:"",
        Medical:"",
        Telephone:"",
        LTA:"",
        SPIAllowance:"",
    })

    const options = [
      { value: '0', label: '0' },
  { value: '14000', label: '14000' }];

    // const defaultOption = options[0];

    
const {regEmployeeCode,regEmployeeName,regCtc,regBasic,regPf,regMedical,regTelephone,regLta,regSpiallowance}=Employee;

const calmulti =()=>{
    var sal =document.getElementById("validation1").value
    const ctcnum =(Employee.regCtc*35)
    //const basnum = (Employee.regBasic*12)
    console.log(ctcnum);
    setEmployee({...Employee,regBasic:ctcnum.toString()})

}

const calpf =()=>{
    var salpf =document.getElementById("validation2").value
    const basnum = (Employee.regBasic*12)
    console.log(basnum);
    setEmployee({...Employee,regPf:basnum.toString()})
}


const caltol =()=>{
    var salpf =document.getElementById("validation6").value
    const tolnum = (Employee.regBasic*Employee.regCtc)
    console.log(caltol);
    setEmployee({...Employee,regSpiallowance:tolnum.toString()})
}





function OnMan() {
    
    var emp = document.getElementById("validation").required=("Enter the employee code");
    document.getElementById("testing").innerHTML=emp;
    var val = document.getElementById("validation1").required=("Enter the employee ctc");
    document.getElementById("testing1").innerHTML=val;
    var val1 = document.getElementById("validation2").required=("Enter the Basic");
    document.getElementById("testing2").innerHTML=val1;
    var pF = document.getElementById("validation3").required=("Enter the PF");
    document.getElementById("testing3").innerHTML=pF;
    var name = document.getElementById("validation4").required=("Enter the employee Name");
    document.getElementById("testing4").innerHTML=name;
    var medical= document.getElementById("validation5").required=("Enter Medical amount");
    document.getElementById("testing5").innerHTML=medical;
    var spi= document.getElementById("validation6").required=("Enter the spi allowance");
    document.getElementById("testing6").innerHTML=spi;
    var tele= document.getElementById("validation7").required=("Enter the telephone amount");
    document.getElementById("testing7").innerHTML=tele;

   

    let x = document.getElementById("numb").value;
    let text;
    if(isNaN(x)|| x < 1 || x > 10){
        text = "please enter 10 digit number";
    }else{
        text = "Input OK";
    }
    Document.getElementById("demo").innerHTML = text; 


    let Y= document.getElementById("numb").value;
    let txt;
    if(isNaN(Y)|| x < 1 || x > 9){
        text = "please enter 9 digit number";
    }else{
        txt = "Input OK";
    }
    Document.getElementById("demo").innerHTML = txt;
    

}
const oninputChange= e=>{
    setEmployee({...Employee,[e.target.name]: e.target.value});
    }
    const onSubmit = async  => {
        
        
        axios.post("https://localhost:7183/api/Employee/InsertDetails",Employee);
        alert ("inserted sucessfully ");
       

    };

    return(
       <div className='container' >
            <div className='text-center'>
                <h1>Employee Details</h1>
                <form onSubmit={e=>onSubmit(e)}>
            
                <div className="form-group">
                   <input  
                    type="text" 
                    className='input-box' 
                    id='validation'
                    placeholder="Employeecode"
                    name="regEmployeeCode"
                    value={regEmployeeCode}
                    onChange={e=>oninputChange(e)}
                    />
                    <p onClick={OnMan} id='testing'></p>   
                </div>
                <div className='input-box'>
                   <input type ="text"
                    placeholder="EmployeeName"
                    id='validation4'
                    name="regEmployeeName"
                    value={regEmployeeName}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={OnMan} id='testing4'></p>

                </div>
                <div className='input-box1'>
                   <input type ="text"
                   id='validation1'
                    placeholder="CTC"
                    name="regCtc"
                    className='input-box1'
                    value={regCtc}
                    onChange={e =>oninputChange(e)}
                    />
                </div>
                <p onClick={OnMan} id='testing1'></p>

                
                <div className='input-box'>
                   <input readOnly
                    placeholder="Basic"
                    id='validation2'
                    name="regBasic"
                    onMouseMove={e =>calmulti(e)}
                    value={regBasic}
                    onChange={e =>oninputChange(e)}
                    />
                     <p onClick={OnMan} id='testing2'></p>
                </div>
              
                <div className='input-box'>
                   <input type ="text"
                    placeholder="PF"
                    name="regPf"
                    id='validation3'
                    className='box'
                    onMouseMove={e =>calpf(e)}
                    value={regPf}
                    onChange={e =>oninputChange(e)}
                    />
                 <p onClick={OnMan} id='testing3'></p>

                </div>
                
                <div >
                   <input type ="number"
                   min="5000"
                   max="15000"
                   className='box'
                    placeholder="Medical"
                    name="regMedical"
                    id='validation5'

                    value={regMedical}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={OnMan} id='testing5'></p>

                </div>
                
                <div >
                   <input type ="number"
                    placeholder="Telephone"
                    className='box'
                    id='validation7'
                    min="1000"
                    max="12000"
                    name="regTelephone"
                    value={regTelephone}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={OnMan} id='testing7'></p>

                </div>
                
               <div className='input'>
                <Dropdown options={options} name='regLta' onChange={(value) => setEmployee({...Employee,
                  regLta:value.value})} value={Employee.regLta} placeholder="LTA" />
                  
               
                </div>
                
                <div>
                   <input type ="text"
                    placeholder="SPI Allowance"
                    name="regSpiallowance"
                    value={regSpiallowance}
                    id='validation6'
                    onMouseMove={e =>caltol(e)}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={OnMan} id='testing6'></p>

                </div>        

               <button type='submit' onClick={OnMan} >Submit</button>



                </form>
            
            
                </div>
                
        </div>
    )
              
}
export default Register;
