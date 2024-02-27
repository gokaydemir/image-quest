import { useState } from "react";

function SearchHeader({ search }) {
    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandler = (e) => {
        search(searchQuery);
        e.preventDefault();
    }
    const inputQueryHandler = (e) => {
        const query = e.target.value
        setSearchQuery(query);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={searchQueryHandler}>
                <input onChange={inputQueryHandler} className="shInput" placeholder="Search..."></input>
            </form>
        </div>



    );
}

export default SearchHeader;