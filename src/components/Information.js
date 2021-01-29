import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="h1">
                This section is about {" "}
                 <span className="text-primary">{this.props.language}</span>
            </div>

            <div className="h5">
                <ol>
                    <li>
                        <span className="text-primary">{this.props.language}</span>{" "}Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </li>

                    <li>
                        <span className="text-primary">{this.props.language}</span>{" "}Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </li>

                    <li>
                        <span className="text-primary">{this.props.language}</span>{" "}when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </li>
                </ol>
            </div>
            </React.Fragment>
        )
    }
}

