import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import '../style/styleSearchBar.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faClose, faSearch)
class SearchBar extends React.Component {
    state = {
        filteredData: [],
        wordEnter: ''
    }

    handFilterWord = (event) => {
        const { data } = this.props
        const searchWord = event.target.value;
        this.setState({ wordEnter: searchWord })
        const newFilter = data.filter(value => value.title.toLowerCase().includes(searchWord.toLowerCase()))
        if (searchWord === '') {
            this.setState({ filteredData: [] })
        }
        else {
            this.setState({ filteredData: newFilter })
        }
    }
    clearInput = () => {
        this.setState(
            {
                filteredData: [],
                wordEnter: ''
            }
        )
    }
    render() {
        //console.log(this.props);
        const { filteredData, wordEnter } = this.state;
        const { placeholder } = this.props;
        //console.log(filteredData.length);
        return (
            <>
                <div className="searchInputs">
                    <input
                        type='text'
                        placeholder={placeholder}
                        value={wordEnter}
                        onChange={(event) => this.handFilterWord(event)}
                    />
                    <div className="searchIcon">
                        {filteredData.length === 0 ? (
                            <FontAwesomeIcon icon='search' />
                        ) :
                            (
                                <FontAwesomeIcon id="clearBtn" icon='close' onClick={this.clearInput} />
                            )
                        }
                    </div>
                </div>
                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.map((value, index) => {
                            return (
                                <a key={index} className="dataItem" href={value.link}>
                                    <p>{value.title} </p>
                                </a>
                            )
                        })}
                    </div>
                )}
            </>
        )
    }
}
export default SearchBar