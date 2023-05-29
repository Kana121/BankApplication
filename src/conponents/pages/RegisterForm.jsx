import React from 'react'

function RegisterForm() {
  return (
    <div className='row'>
    <div className='col-md-6 offset-md-3'>
    <div className='container border border-dark   form'>

      <form>
  <div className="mb-3 my-2 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter First Name</label>
    <input className="form-control" type="text" />
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input className="form-control" type="text" placeholder="Default input" />
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input className="form-control" type="text" placeholder="Default input" />
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input className="form-control" type="text" placeholder="Default input" />
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input className="form-control" type="text" placeholder="Default input" />
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input className="form-control" type="text" placeholder="Default input" />

  
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
    </div>
  )
}

export default RegisterForm
