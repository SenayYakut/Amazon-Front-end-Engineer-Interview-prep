import React, { Component } from 'react'
import Table from './Table'
class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        )
    }
}
class Table extends Component {
    render() {
        const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}


export default App