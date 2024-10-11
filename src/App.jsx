import { useState } from "react";
const BgChange = () => {

    const[bgcolor, Setbgcolor] = useState("white");
    const changebackgorund = (color) => {
         Setbgcolor(color);
        };
         const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        bordrRadius: '5px',
        backgroundColor: '#ddd',
    };

    return (
        <div style={{backgroundColor: bgcolor, height:'100vh', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Background Color Changer</h1>
            <div>
                <button onClick={() => changebackgorund('Lightblue')}
                    style={buttonStyle}>LightBlue </button>
                <button onClick={() => changebackgorund('Lightgreen')}
                    style={buttonStyle}>Lightgreen </button>
                <button onClick={() => changebackgorund('Lightcoral')}
                    style={buttonStyle}>Lightcoral </button>
                <button onClick={() => changebackgorund('Lightyellow')}
                    style={buttonStyle}>Lightyellow </button>
                <button onClick={() => changebackgorund('white')}
                    style={buttonStyle}>white </button>
                    
            </div>
        </div>
    );

    
};
export default BgChange;