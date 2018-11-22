import React from 'react'
import Button from './components/Button'

class Counter extends React.Component {
    state = {
        otherProp: 'whatever',
        number: this.props.startNumber || 0
    }


    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })
    resHandler = () => this.setState({ number: 0 })
    multiplyHandler = () => this.setState({ number: this.state.number * 2 })
    divHandler = () => this.setState({ number: this.state.number / 2 })

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler}
                    label={'+'}
                />
                <Button
                    onClick={this.decHandler}
                    label={'-'}
                />
                <Button
                    onClick={this.resHandler}
                    label={'reset'}
                />
                <Button
                    onClick={this.multiplyHandler}
                    label={'Mnóż'}
                />
                <Button
                    onClick={this.divHandler}
                    label={'dziel'}
                />
            </div>

        )
    }
}

export default Counter 