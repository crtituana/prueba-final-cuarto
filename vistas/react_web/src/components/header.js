/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className="flex-grow flex mr-2 ml-64">
            <div className="flex-grow flex">
                <a className="block mt-4 inline-block mt-0 text-teal-lighter mr-4 ml-4">
                     { localStorage.getItem('nombre') }
                </a>
            </div>
            <div>
                <Link to="/">
                    <button className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                      Salir
                    </button>
                </Link>
            </div>            
        </div>
        )
    }
}
