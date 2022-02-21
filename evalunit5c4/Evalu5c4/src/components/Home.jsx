import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import {Div} from "./Home Style"
function Home() {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    function redirect(e)
    {
      e.preventDefault();
        if(e.key == "Enter")
        {
            // console.log(search)
            navigate(`/search/${search}`)
        }
    }

  return (
    <Div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' />
      <br />
      <input type="text" className='search-box' placeholder="Search Google" onChange={(e)=>{setSearch(e.target.value)}} onKeyPress={(e)=>{redirect(e)}} />
    </Div>
  )
}

export default Home
