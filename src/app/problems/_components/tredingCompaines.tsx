import React from 'react'
import { FaArrowLeft,FaArrowRight,FaSearch } from 'react-icons/fa'; // Importing from Font Awesome set
import "./style/tredingCompaines.css"
const TredingCompaines = () => {
    return (
        <div>
            <div className="heading">
                <h4>Trending Companies</h4>
                <div className="arrows">
                    <div className='arrow-left'><FaArrowLeft size={20} /></div>
                    <div className='arrow-right'><FaArrowRight size={20} /></div>
                </div>
            </div>
            <div className="searchBar">
                <input className='search-input' type="search" placeholder="Search for a Company.... "/>
            </div>
            <div className="list">
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
                <p>Amazon <span>911</span></p>
            </div>
        </div>
    )
}

export default TredingCompaines
