import React from 'react';
import './Form.css';

const Form = (props) => {
        return(
            <div className="form">
                <h3>Instructions</h3>
                <ol>
                    <li>Type the names (one per line) in the text box</li>
                    <li>Select a language from the dropdown</li>
                    <li>Click the 'Create' button to get your name cards!</li>
                </ol>
                <form onSubmit={props.handleSubmit}>
                    <label><h3>Names</h3><br />
                        <textarea value={props.names} onChange={(e) => props.handleInput(e)} placeholder="Please type each name on its own line" />
                    </label> <br />
                    <label><h3>Language</h3><br />
                        <select value={props.language} onChange={(e) => props.handleSelect(e)}>
                            <option>Select...</option>
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