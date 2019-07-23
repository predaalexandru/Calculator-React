import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeypadComponent";

class App extends Component {
    //constructor
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    //onclick function
    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "Clear"){
            this.reset()
        }
        else if(button === "Back"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    // calculate the result of our expression
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    //clear our output when “Clear” is pressed.
    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
                <div className="calculator-footer">
                  <p> © 2019 Copyright: Preda Alexandru </p>
                </div>
            </div>
        );
    }
}

export default App;