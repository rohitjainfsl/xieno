import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
	
	return (
		<aside>
      <h3>Filters</h3>
      <p>Launch Year</p>
      
      <ul>
      	<li key={1}>
      		<Link to='/2006' className="launch_year" key={1}>2006</Link>
      	</li>
      	<li key={2}>
      		<Link to='/2007' className="launch_year" key={2}>2007</Link>
      	</li>
      	<li key={3}>
      		<Link to='/2008' className="launch_year" key={3}>2008</Link>
      	</li>
      	<li key={4}>
      		<Link to='/2009' className="launch_year" key={4}>2009</Link>
      	</li>
      	<li key={5}>
      		<Link to='/2010' className="launch_year" key={5}>2010</Link>
      	</li>

      	<li key={6}>
      		<Link to='/2011' className="launch_year" key={6}>2011</Link>
      	</li>
      	<li key={7}>
      		<Link to='/2012' className="launch_year" key={7}>2012</Link>
      	</li>
      	<li key={8}>
      		<Link to='/2013' className="launch_year" key={8}>2013</Link>
      	</li>
      	<li key={9}>
      		<Link to='/2014' className="launch_year" key={9}>2014</Link>
      	</li>
      	<li key={10}>
      		<Link to='/2015' className="launch_year" key={10}>2015</Link>
      	</li>

      	<li key={11}>
      		<Link to='/2016' className="launch_year" key={11}>2016</Link>
      	</li>
      	<li key={12}>
      		<Link to='/2017' className="launch_year" key={12}>2017</Link>
      	</li>
      	<li key={13}>
      		<Link to='/2018' className="launch_year" key={13}>2018</Link>
      	</li>
      	<li key={14}>
      		<Link to='/2019' className="launch_year" key={14}>2019</Link>
      	</li>
      	<li key={15}>
      		<Link to='/2020' className="launch_year" key={15}>2020</Link>
      	</li>
      </ul>
    </aside>
	)
}

export default Sidebar