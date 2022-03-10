import React from 'react'
import ReactDOM from 'react-dom'
import {el} from './virtual-dom/element'
import './index.css'
import App from './App'

const app = <App title='Virtual DOM' style={{width: '100%'}} />;
console.log(app)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
)

function renderVirtualDom() {
  const tree = el('div', { id: 'virtual-container' }, 'key', [
    el('p', {},'key-1', ['Virtual DOM']),
    el('div', {},'key-2', ['before update']),
    el('ul', {}, 'key-3', [
      el('li', { class: 'item' },'key-3-1', ['Item 1']),
      el('li', { class: 'item' },'key-3-2', ['Item 2']),
      el('li', { class: 'item' },'key-3-3', ['Item 3']),
    ])
  ]);

  const root = tree.render();
  document.getElementById('virtualDom')?.appendChild(root);
}

renderVirtualDom();
