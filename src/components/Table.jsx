import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>URL</th>
            <th>Comments</th>
        </tr>
        </thead>
    )
};

const CommentSection = (props) => {
    const { comments } = props

    const result = comments.map((entry, index) => {
        return <li key={index}>{entry.comment}</li>
    })

    return <ul>{result}</ul>
}

const TableBody = (props) => {
    const rows = props.apiData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.uri}</td>
                <td><CommentSection comments={row.comments} /></td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
};

class Table extends Component {
    render() {
        const { apiData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody apiData={apiData} />
            </table>
        )
    }
}

export default Table;