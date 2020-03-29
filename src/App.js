import React from 'react';
import './App.css';
import Grid from "./grid/grid";

function App() {


    const columnsData = [{
        field: 'name',
        content: <div className={'grid-header'}>Name</div>,
    }, {
        field: 'dateOfBirth',
        content: <div className={'grid-header'}>Date of birth</div>,
    }, {
        field: 'position',
        content: <div className={'grid-header'}>Position</div>,
    }, {
        field: 'salary',
        content: <div className={'grid-header'}>Salary per year</div>,
    },
    ];

    const gridData = [{
        name: "John Kawasaki",
        dateOfBirth: "02-12-1976",
        position: "Speed racer",
        salary: "45000",
    }, {
        name: "Sub Zero",
        dateOfBirth: "01-01-1979",
        position: "Warrior",
        salary: "40000",
    }, {
        name: "Mike R Spider",
        dateOfBirth: "02-12-1985",
        position: "Assassin",
        salary: "67000",
    },];


    return (
        <div className="App">

            <Grid columns={columnsData} data={gridData}/>

        </div>
    );
}

export default App;
