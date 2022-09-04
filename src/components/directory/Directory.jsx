import React from 'react'

import DirectoryItemContainer from '../directory-item/DirectoryItem';
import './directory.scss'


const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {
        categories.map((category) => (
          <DirectoryItemContainer key={categories.id} category={category}/>
        ))
      }
    </div>
  )
}

export default Directory