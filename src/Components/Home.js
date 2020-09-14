import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        Recovered: [],
        Confirmed: [],
        Deaths: [],
        Countries: []
    }
    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/skhatri/covid-19-json-api-data/master/data/latest_counters.json')
            .then(res => {
                this.setState({
                    Recovered: res.data.counts.recovered,
                    Confirmed: res.data.counts.confirmed,
                    Deaths: res.data.counts.deaths,
                    Countries: res.data.items
                })
            })

    }   

    render() {

        const { Recovered, Confirmed, Deaths, Countries } =  this.state;
        
        const countryData = Countries.length ? (
            Countries.map(country => {
            return (
                <tr key={country.country_province_key}>
                    <td>{country.country_province_key}</td>
                    <td>{country.timeline.counts.recovered}</td>
                    <td>{country.timeline.counts.confirmed}</td>
                    <td>{country.timeline.counts.deaths}</td>
                </tr>
            )
        })) : (
            <div>Data Loading</div>
        )
        
        return (
            <div>

                <div>
                    <table>
                        <tr>
                            <td><strong>Recovered:</strong> {Recovered}</td>
                            <td><strong>Confirmed:</strong> {Confirmed}</td>
                            <td><strong>Death:</strong> {Deaths}</td>
                        </tr>
                    </table>
                </div>
            
                <div>
                    <table>
                        <tr>
                            <th>Country</th>
                            <th>Recovered</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                        </tr>
                        {countryData}
                    </table>
                </div>

            </div>

        )
    }
};

export default Home;