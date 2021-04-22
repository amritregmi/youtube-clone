import React from 'react'
/**
 * @THIS guy is responsible to get search term 
 * @ONSUBMIT it calls parent function passing the serach key word
 * @Controled component or two way binding is done.
 */
class SearchBar extends React.Component{
    state = { term: '' }

    // two way bingding
    onInputChange = (e) => {
        e.preventDefault();
        this.setState({term: e.target.value})
    }
    // calls parent component with search key word.
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment ">
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            value={this.state.term}
                            onChange = {this.onInputChange}
                            type="text" 
                            placeholder="Search YOUTUBE"
                        />
                    </div>
                </form>
            
            </div>
        )
    }
}

export default SearchBar
