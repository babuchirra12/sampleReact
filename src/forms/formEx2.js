
import { useState } from "react";

export default function FormEx2() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {

    const name = event.target.name;

    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }))
  }



  const handleSubmit = (event) => {
   event.preventDefault();
    console.log(inputs)
  }
  return (
    <>


      <div style={{ width: '80%', margin: 'auto' }}>

        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>Enter your age:
            <input
              type="number"   
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>





      </div>
    </>
  )
}



