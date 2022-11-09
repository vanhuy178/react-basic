import React from "react";
import SearchBar from '../components/SearchBar'
import BookData from '../data/data.json'
import '../style/styleMain.scss'
class RenderSearchBar extends React.Component {
    render() {
        return (
            <div className="searchBar-container" >
                <SearchBar placeholder="Enter a Book Name..." data={BookData} />
            </div>
        )
    }
}
export default RenderSearchBar;

// Just import it into App.js file and use it
