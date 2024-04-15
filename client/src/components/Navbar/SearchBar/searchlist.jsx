import React from 'react'
import './searchlist.css'
import { FaSearch } from 'react-icons/fa';

function Searchlist({TitleArray,setsearchQuery}) {
  return (
    <>
      <div className="container_searchlist">
        {
            TitleArray.map(m=>{
                return <p key={m} onClick={e=>setsearchQuery(m)} className="tital_item">
                <FaSearch style={{marginRight:'1rem'}} />
                {m}
            </p>
            })
        }
      </div>
    </>
  )
}

export default Searchlist;