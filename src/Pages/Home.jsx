import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "../css/home.css";
import { registerAPI } from "../../Services/allAPI";
import { Link, useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function Home() {
    const navigate =useNavigate()
    const[isLogin,setIsLogin] = useState(false)
  const [inputData, setInputData] = useState({
    fName: "",
    lName: "",
    address: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    dob: "",
    course: "",
  });
  const handleRegister=async(e)=>{
    e.preventDefault()
   
    const {fName,lName,address,email,gender,mobile,password,dob,course}=inputData
    // console.log(inputData);

      if(!fName || !lName || !address || !email || !gender || !mobile || !password || !dob || !course){
        alert('please fill the form completely..')
      }else{
        try{
            const result = await registerAPI(inputData)
            console.log(result);
            if(result.status === 200){
              setIsLogin(true)
                setTimeout(() => {
                    
                    navigate('/dashboard')
                    
                }, 2000);
                setInputData({
                    fName: "",
                    lName: "",
                    address: "",
                    email: "",
                    gender: "",
                    mobile: "",
                    password: "",
                    dob: "",
                    course: "",

                })
            }else{
                alert(result.response.data)
            }

        }catch(err){
            console.log(err);

        }
      }

  }
  return (
    <div>

      <div
        style={{ height: "100vh", width: "100%" }}
        className="container d-flex justify-content-center align-items-center flex-column"
      >
                      <h2 className="text-center" style={{fontFamily:"sans-serif"}}>Apply as a Student</h2>

        <div className="row border w-100 rounded mt-2">
          <div className="col-lg-4 border d-flex justify-content-center align-items-center flex-column" style={{backgroundColor:"#3737b4",borderRadius:"10%"}}>
            <img
              src="https://i.postimg.cc/SRHrgh8h/image.png"
              className="img-fluid"
              alt="nothing"
              style={{borderRadius:"10%"}}
            />
            <Link to={'/'}> <Button variant="light" size="sm" className="mt-5 " >Back</Button></Link>
          </div>
          <div className="col-lg-8 border ">
            <div className="row p-3" style={{ backgroundColor: "#f8f6f9" }}>
              <div className="col-lg-6 p-2 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="first name">First Name</label>
                    <input
                      type="text"
                      className="form-control w-100 mt-0 input"
                      id="first name"
                      placeholder="Enter your firstname"
                      value={inputData.fName}
                      onChange={(e) =>
                        setInputData({ ...inputData, fName: e.target.value })
                      }
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      className="form-control w-100 mt-2"
                      id="last-name"
                      placeholder="Enter your last name"
                      value={inputData.lName}
                      onChange={(e) =>
                        setInputData({ ...inputData, lName: e.target.value })
                      }
                    />

                    <label htmlFor="exampleFormControlTextarea1">Address</label>
                    <textarea
                      className="form-control "
                      id="text1"
                      rows="1"
                      placeholder="Enter your address"
                      value={inputData.address}
                      onChange={(e) =>
                        setInputData({ ...inputData, address: e.target.value })
                      }
                    ></textarea>

                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control w-100"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      value={inputData.email}
                      onChange={(e) =>setInputData({ ...inputData, email: e.target.value })
                      }
                    />

                    <div
                      className="form-group d-flex mt-3"
                      style={{ marginBottom: "1rem" }}
                    >
                      <label style={{ marginRight: "1rem" }}>Gender</label>
                      <div
                        className="radio-inline"
                        style={{ marginRight: "1rem" }}
                      >
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          value='female'
                          onChange={(e) =>
                            setInputData({
                              ...inputData,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label
                          htmlFor="female"
                          style={{ marginLeft: "0.5rem", marginRight: "1rem" }}
                        >
                          Female
                        </label>
                      </div>
                      <div className="radio-inline">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          onChange={(e) =>
                            setInputData({
                              ...inputData,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="male" style={{ marginLeft: "0.5rem" }}>
                          Male
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 p-2">
                <form >
                  <div className="form-group">
                    <label htmlFor="first-name2">Mobile</label>
                    <input
                      type="text"
                      className="form-control w-100"
                      id="first-name2"
                      placeholder="Enter your mobile number"
                      value={inputData.mobile}
                      onChange={(e)=>setInputData({...inputData,mobile:e.target.value})}
                      
                    />

                    <label htmlFor="first-name3">Password</label>
                    <input
                      type="password"
                      className="form-control w-100"
                      id="first-name3"
                      placeholder="Enter your password"
                      value={inputData.password}
                      onChange={(e)=>setInputData({...inputData,password:e.target.value})}

                      
                    />

                    <label htmlFor="birthday">Date of birth</label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      className="mt-3 ms-2"
                      value={inputData.dob}
                      onChange={(e)=>setInputData({...inputData,dob:e.target.value})}

                    />
                    <br />

                    <label htmlFor="course" className="mt-3">
                      Course
                    </label>
                    <select
                      className="form-select  "
                      aria-label="Default select example"
                      id="course"
                      onChange={(e)=>setInputData({...inputData,course:e.target.value})}

                    >
                      <option selected>SOFTWARE DEVELOPMENT</option>
                      <option value="MEARN STACK">MEARN STACK</option>
                      <option value="PYTHON DJANGO">PYTHON DJANGO</option>
                      <option value="DOT NET">DOT NET</option>
                    </select>

                    <div className="text-center">
                      <Button variant="primary" size="sm" className="mt-4 w-50" onClick={(e)=>handleRegister(e)}>
                        Submit {isLogin && <Spinner animation="border" role="status" size="sm">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
