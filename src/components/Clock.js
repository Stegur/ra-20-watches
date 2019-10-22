import React from 'react';
import PropTypes from 'prop-types'
import './Clock.css'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.name = props.name;
        this.timezone = props.timezone;
        this.id = props.id;

        this.now = new Date();
        this.hours = this.now.getUTCHours() + this.timezone;
        this.time = new Date(this.now.setHours(this.hours));

        this.state = {
            time: this.time
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date(new Date().setHours(this.hours))
        });
    }

    handleClick = (event) => {
        event.preventDefault();

        this.props.onDel(this.id)
    }


    render() {
        return (
            <div className="Clock">
                <div className="Clock-name">{this.name}</div>
                <div className="Clock-time">{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</div>
                <a href="#" className="Clock-del" onClick={this.handleClick}>Удалить</a>
            </div>
        );
    }
}

Clock.propTypes = {
    name: PropTypes.string.isRequired,
    timezone: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}

export default Clock;