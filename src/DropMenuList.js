
import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function DropMenuList() {
    let FlagSelect = ['Low', 'Medium', 'High', 'Critical', 'FlagSelect'];
    let colors = ['secondary', 'primary', 'warning', 'danger', 'dark'];
    const [color, setColor] = useState("dark");
    const [flag, setFlag] = useState("FlagSelect");

    const handleSelect = (i) => {
        console.log(i);
        setFlag(FlagSelect[i]);
        setColor(colors[i]);

    }



    return (
            <>
        <DropdownButton
            title={flag}
            variant={color}
            onSelect={handleSelect}
        >
            <ul>
                <li><span><Dropdown.Item eventKey="0">Low</Dropdown.Item><Dropdown.Divider /></span></li>
                <li><span><Dropdown.Item eventKey="1">Medium</Dropdown.Item><Dropdown.Divider /></span></li>
                <li><span><Dropdown.Item eventKey="2">High</Dropdown.Item><Dropdown.Divider /></span></li>
                <li><span><Dropdown.Item eventKey="3">Critical</Dropdown.Item><Dropdown.Divider /></span></li>
                <li><span><Dropdown.Item eventKey="4">Clear</Dropdown.Item><Dropdown.Divider /></span></li>
            </ul>

        </DropdownButton>
</>
    )
}

export default DropMenuList
