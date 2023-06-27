import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(
            // Never ever do this
            // document.querySelector('input').value
            term
        );
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        //console.log(event.target.value);
    };

    return (<div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange} />
        </form>

    </div>)

    // const handleFormSubmit = (event) => {
    //     if (event.key == 'Enter') {
    //         onSubmit('cars');
    //     }
    // }

    // return (<div>
    //     <input onKeyDown={handleFormSubmit} />

    // </div>)
}

export default SearchBar;