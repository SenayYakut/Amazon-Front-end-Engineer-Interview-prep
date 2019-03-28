import React, { Component } from 'react'

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

export default Table 