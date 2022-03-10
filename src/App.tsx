import React, {CSSProperties} from 'react'

interface AppProps {
  title: string;
  style?: CSSProperties
}

function App(props: AppProps) {
  return (
    <div className="App" style={props.style}>
      <div id="realDom">
        <div id="real-container">
          <p>{props.title}</p>
          <div>cannot update</div>
          <ul>
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
          </ul>
        </div>
      </div>
      <div id="virtualDom" />
    </div>
  )
}

export default App

