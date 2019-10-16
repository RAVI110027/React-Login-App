import React from 'react';
import Link from 'next/link';

export default function PasswordReset() {
    return (
        <React.Fragment>
            
            <div className="container"><h1 className='text-center'>
            Password Reset...
            </h1>
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email Address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <Link href="/password-reset"><button type="submit" className="btn btn-primary">Submit</button></Link>
</form>
            </div>
            
        </React.Fragment>
    )
}
