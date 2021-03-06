import React from "react";
import ReactDOM from "react-dom";

import "./styles.less";

class App extends React.Component{
  constructor(props){
    super(props)
    this.getComputedStyleValue = this.getComputedStyleValue.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onLoad = this.onLoad.bind(this)
  }

  handleChange(val){
    let el = document.getElementById("face-after")
    el.style.cssText += val.target.value
  }

  onLoad(){
    let attrs = ['border-radius','height','width','animation']
    let el = attrs.reduce((a,v)=>{
      if(v==="animation" && this.getComputedStyleValue('#face-after',v).indexOf('none running')>0){
        return a += "";
      }
      return a += `${v}: ${this.getComputedStyleValue('#face-after',v)};\r\n`
    },"")
    let input = document.getElementById('stylebox')
    input.value=el;
  }

  getComputedStyleValue(sel, attr){
    return window.getComputedStyle(document.querySelector(sel)).getPropertyValue(attr)
  }

  componentDidMount(){
    this.onLoad();
  }
  
  render(){
    return (
      <div className="border-box-wrapper">
      <div className="stylebox">
        <textarea id="stylebox"  onChange={e=>{setTimeout(this.handleChange(e),500)}} type="text" />
      </div>
      <div id="face-after" className="face">
        <div className="eye left">
          <div className="black">
            <div className="bling"></div>
          </div>
          <div className="chick left"/>
        </div>
        <div className="eye right">
          <div className="black">
            <div className="bling"></div>
          </div>
          <div className="chick right"></div>
        </div>
        <div className="nose"></div>
        <div className="mouse">
          <div className="tooth"></div>
        </div>
        <div className="face-after"></div>
      </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("border-radius");
ReactDOM.render(<App />, rootElement);
