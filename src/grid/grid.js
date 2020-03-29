import React from "react";
import * as styles from './grid.scss';

class Grid extends React.Component {

    render() {

        return (
            <div className={'grid'}>

                <div className={'grid__header'}>
                    {this.props.columns.map((column, index) => {
                        return (
                            <div key={index} className={'grid__cell'}>{column.content}</div>
                        )
                    })}
                </div>

                {this.props.data.map((row, index) => {
                    return (
                        <div key={index} className={'grid__content'}>


                            {this.props.columns.map((column, index) => {
                                return <div className={'grid__cell'}>{row[column.field]}</div>
                            })}

                        </div>
                    )
                })}

            </div>
        )
    }

}

export default Grid;