import DirectoryItem from '../directory-item/DirectoryItem';
import './directory.scss'

//no se lo pasa a firebase porque aqui definimos las rutas a redireccionarse de las paginas
//y no tiene caso subir esa propiedad a la db
const categories = [
  {
    "id": 1,
    "title": "Sombreros",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/sombreros'
  },
  {
    "id": 2,
    "title": "Chaquetas",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/chaquetas'
  },
  {
    "id": 3,
    "title": "Zapatos",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/zapatos'
  },
  {
    "id": 4,
    "title": "Mujeres",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/mujeres'
  },
  {
    "id": 5,
    "title": "Hombres",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/hombres'
  }
] 

const Directory = () => {
  return (
    <div className="directory-container">
      {
        categories.map((category) => (
          <DirectoryItem key={categories.id} category={category}/>
        ))
      }
    </div>
  )
}

export default Directory