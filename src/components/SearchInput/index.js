import React, { Component } from 'react';
import * as actionSearch from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import locationIcon from '../../assets/images/location.png'

class SearchInput extends Component {
    constructor() {
        super();

        this.state = {
            search: ''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeInput(e) {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.searchWeatherFiveDays(this.state.search);
        this.props.searchWeatherNow(this.state.search);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <img src={locationIcon} alt="Pesquisar" />
                    </button>
                    <input type="text" placeholder="Weather in..." onChange={this.handleChangeInput}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fiveDaysWeather: state.fiveDaysWeather
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actionSearch, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);