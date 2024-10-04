import React from 'react'

function Form() {
  return (
    <div className='flex justify-center items-center border-red-500'>
      <form data-netlify="true" name="contact v1" method='post'  onSubmit="submit" action='/thanks.html'>

      <input type="hidden" name="form-name" value="contact v1" />


      <div>
        <label >First Name <br/>
        <input type="text" name='first-name'/>
        </label>
      </div>

      <div>
        <label htmlFor='email'>Email <br/>
        <input id='email' type="email" name='email'/>
        </label>
      </div>

      <div>
        <label>message <br/>
        <textarea name="message" ></textarea>
        </label>
      </div>

        <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default Form
