import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Home'><div>Home</div></Link>
		<Link to='/Fleet'><div>Fleet</div></Link>
		<Link to='/Services'><div>Services</div></Link>
		<Link to='/Contactus'><div>Contactus</div></Link>
	</div>
	)
}