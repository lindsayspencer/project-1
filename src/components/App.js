import React from "react";
import './App.css';
import Form from './Form';
import NameCards from './NameCards';

class App extends React.Component {
    state = {
        names: "",
        language: "",
        greeting: "",
        showCard: false
    }
    handleNameInput = (e) => {
        this.setState({ names: e.target.value });
    }
    handleLanguageSelect = (e) => {
        this.setState({ language: e.target.value });
    }
    getGreeting = () => {
        const lang = this.state.language;
        let greeting = ""
        if(lang === "English"){
            greeting = "Hello";
        } else if(lang === "Japanese"){
            greeting = "Konichiwa";
        } else if(lang === "Italian"){
            greeting = "Ciao";
        } else if(lang === "French"){
            greeting = "Bonjour";
        } else if(lang === "Spanish"){
            greeting = "Hola";
        } else if(lang === "Danish"){
            greeting = "Hej";
        } 
        this.setState({ greeting: greeting });
    }
    getNameCards = (e) => {
        e.preventDefault();
        if(this.state.language === ""){
            alert("Please select a language for the name cards");
            return;
        } else if(this.state.names === ""){
            alert("Please enter names for the name cards");
            return;
        }
        this.getGreeting();
        this.setState({ showCard: true });
    }
    render(){
        return(
            <div className="app">
                <div className="app-header">
                    <h1 id="app-title">Name Card Generator</h1>
                </div>
                <div className="app-body">
                    <Form names={this.state.names} language={this.state.language} handleInput={this.handleNameInput} handleSelect={this.handleLanguageSelect} handleSubmit={this.getNameCards}  />
                    <hr />
                    <NameCards showCard={this.state.showCard} names={this.state.names} greeting={this.state.greeting}  />
                </div>
                <hr />
                <p><a href="https://github.com/lindsayspencer">Lindsay Spencer</a></p>
            </div>
        );
    };
};

export default App;
