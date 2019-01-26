import React from 'react';

const Form = (props) => {
        return(
            <div>
                <p>Type the names (one per line) in the text box below, and select a language. Click 'Create' to get your name cards!</p>
                <form onSubmit={props.handleSubmit}>
                    <label>Names: <br />
                        <textarea value={props.names} onChange={(e) => props.handleInput(e)} placeholder="Please type each name on its own line" />
                    </label> <br />
                    <label>Language: <br />
                        <select value={props.language} onChange={(e) => props.handleSelect(e)}>
                            <option>Select</option>
                            <option value="English">English</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Italian">Italian</option>
                            <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Danish">Danish</option>
                        </select>
                    </label> <br />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );

};


export default Form;