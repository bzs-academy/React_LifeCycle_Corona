import React, { Component } from 'react'
import PieChart from './PieChart'
import axios from 'axios';



class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             confirmed: 0,
             recovered: 0,
             deaths: 0,
             lastUpdate: ''
        }
    }
    
    componentDidMount () {
        axios
            .get('https://covid19.mathdro.id/api')
            .then(res => res.data)
            .then( data => {
                                console.log(data)
                                this.setState({
                                    confirmed: data.confirmed.value,
                                    recovered: data.recovered.value,
                                    deaths: data.deaths.value,
                                    lastUpdate: data.lastUpdate
                                })
                                console.log('this.state : ', this.state)
                            })
    }



    render() {

        const { confirmed, recovered, deaths, lastUpdate } = this.state

        const pieChartData = [
                                {y: confirmed , label:'Confirmed'},
                                {y: recovered , label: 'Recovered'},
                                {y: deaths , label: 'Deaths'}
                            ]

        return (
            <div className="container text-center">
               <PieChart title="COVID-19 LAST UPDATE OVER THE WORLD"  
                         date= {new Date(lastUpdate).toLocaleString()}
                         chartData= {pieChartData}
               />
            </div>
        )
    }
}

export default Home