import React from "react";
import "./style.css";
import React, { useState } from 'react';

export default function App() {

  const [state, setState] = useState({
    listOfGradientColors: [],
    typedColor: "",
  });

  let addColor = () =>{
    event.preventDefault();
    let temp = state;
    let tempList = temp.listOfGradientColors;
    tempList.push(state.typedColor);
    setState({
      ...state,
      listOfGradientColors: tempList,
      typedColor: "",
    })
  }

  let onChange = () => {
    let text = event.target.value;
    setState({
      ...state,
      typedColor: text
    });
  }

  let getGradientColors = () => {
    let colors = "";
    for(let i = 0; i < state.listOfGradientColors.length; i++) {
      colors = colors + state.listOfGradientColors[i] + ",";
    }
    colors = colors.slice(0, colors.length -1);
    console.log(colors);
    return colors;
  }


  return (
    <div>
      <div id="square"/>
      <br/>
      <form onSubmit={addColor}>
        <input type="text" onChange = {onChange}/>
        <button>Add Color</button>
        <ul>
          {state.listOfGradientColors.map((color) => {return <li className="colorsList">{color}</li>})}
        </ul>
      </form>

      <style
        dangerouslySetInnerHTML={{
                __html:
            `
            #square {
                background-image: linear-gradient(${getGradientColors()});
                height: 200px;
                width: 200px;
            }

            .colorsList {
              list-style-type: none;
            }
        
            `}}
      />
    </div>
  );
}
