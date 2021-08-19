import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import VendingMachineImage from "./VendingMachine.png";
import "./VendingMachine.css";

const VendingMachine = () => {
    return (
        <div
            className="VendingMachine"
            style={{
                backgroundImage: `url(${VendingMachineImage})`
            }}
        >
            <Message>
                <h1>hello I am the vending machine, what would you like to eat?</h1>
            </Message>
            <Message>
                <h1><Link to="/soda">soda</Link></h1>
                <h1><Link to="/chips">chips</Link></h1>
                <h1><Link to="/sardines"> fresh sardines</Link></h1>
            </Message>

        </div>
    );

};

export default VendingMachine;