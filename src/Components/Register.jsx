import React,{useState} from 'react'
import {RegisterUser,Test} from '../Api/UserApi'

const Register = () => {
  const [dataform, setdataform] = useState()

  const handlechange = e=>{
      setdataform({...dataform,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      RegisterUser(dataform).then((response)=>{
          console.log(response.data)
      }).catch(()=>{
          console.log('failed')
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input type="text" onChange={handlechange} name="userName" placeholder="userName" /><br />
            <input type="email" onChange={handlechange} name="email" placeholder="Email" /><br />
            <input type="password" name="password" onChange={handlechange} placeholder="Password" /><br />
            <input type="password" name="passwordConfirm" onChange={handlechange} placeholder="passwordConfirm" /><br />
            <input type="text" onChange={handlechange} name="firstName" placeholder="firstName" /><br />
            <input type="text" onChange={handlechange} name="lastName" placeholder="lastName" /><br />
            <button type="submit">register</button>
     </form>
    </div>
  )
}

export default Register