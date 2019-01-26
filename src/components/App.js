import React from "react";
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
        this.getGreeting();
        this.setState({ showCard: true });
    }
    render(){
        return(
            <div>
                App
                <Form names={this.state.names} language={this.state.language} handleInput={this.handleNameInput} handleSelect={this.handleLanguageSelect} handleSubmit={this.getNameCards}  />
                <NameCards showCard={this.state.showCard} names={this.state.names} greeting={this.state.greeting}  />
            </div>
        );
    };
};

export default App;
