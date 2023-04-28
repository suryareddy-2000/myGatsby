import{Link} from 'gatsby'
import * as React from 'react'

function Layout({pageTitle,children}){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </div>
    )
}
export default Layout