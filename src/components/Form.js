import React from 'react';

const Form = (props) => {
        return(
            <div>
                <p>Name: {props.names.split('\n').join()}</p> 
                <p>Language: {props.language}</p>
                <form onSubmit={props.handleSubmit}>
                    <label>Names: 
                        <textarea value={props.names} onChange={(e) => props.handleInput(e)} />
                    </label>
                    <label>Language:
                        <select value={props.language} onChange={(e) => props.handleSelect(e)}>
                            <option value="English">English</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Italian">Italian</option>
                            <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Danish">Danish</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );

};


export default Form;