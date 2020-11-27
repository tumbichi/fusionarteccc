import React from 'react'

const ListItem = ({ data }) => {
    return (
        <div>
            {Object.keys(data).map(field => <p>{data[field]}</p>)}
        </div>
    )
}

export default ListItem
