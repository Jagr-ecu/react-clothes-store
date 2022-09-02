import Directory from '../../components/directory/Directory';

function Home() {

  const categories = [
    {
      "id": 1,
      "title": "Sombreros",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "Chaquetas",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "Zapatos",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "Mujeres",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "Hombres",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]    

  return (
    <Directory categories={categories}/>
  );
}

export default Home;
