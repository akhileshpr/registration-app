import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <>
      <Container>
           <div className='row mt-5 '> 
           <div className='col-lg-6 p-2 mt-3'>
     <div>
        <h2>EDUCATION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea nisi placeat voluptates, delectus molestias ipsa esse impedit animi unde rem vitae sapiente nemo facere vel, non velit quibusdam aperiam.</p>
     <p>new student? click here to <Link to={'/home'} ><Button size='sm' variant="light" className='ms-3'>Register</Button></Link></p>
     </div>
    
           </div>
           <div className='col-lg-6 p-3'>
           <img src="https://i.postimg.cc/65HF8nxv/image.png" className="img-fluid"alt="" />
    
           </div>
    
           </div> 
      </Container>

    </>
  )
}

export default MainPage