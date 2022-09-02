import React from 'react'

import CategoryItem from '../category-item/CategoryItem';
import './directory.scss'


const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {
        categories.map((category) => (
          <CategoryItem key={categories.id} category={category}/>
        ))
      }
    </div>
  )
}

export default Directory