import React from 'react';
import Link from 'next/link';

export default function Home() {
    
    return (
        <React.Fragment>
          
            <div className="conatiner">
              <div className="text-center">
            Home Page
            </div>
            <Link href="/login"><button type="submit" className="btn btn-primary align-items-center">
            Login
            </button></Link>
            <Link href="/signup"><button type="submit" className="btn btn-primary align-items-center">
            SignUp
            </button></Link></div> 
</React.Fragment>
    )
}
