import React from 'react';
import './Table.css';

const sortByName = (list) => {
    list.sort((a,b)=> {
        if(a.name > b.name){
            return 1
        }
        else{
            return -1
        }
    })
    console.log(list)
    return list
}

const sortByAge = (list) => {
    list.sort((a,b) => new Date(a.birth).getTime() - new Date(b.birth).getTime())
    return list   
}

const Table = (props) => {
    let {data, value} = props

    if(value==="name"){
        sortByName(data)
    }
    else if(value==="age"){
        sortByAge(data)
    }
    return(
    <div className="TableView">
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {data.map(el => {
                    return(
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.birth}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default Table