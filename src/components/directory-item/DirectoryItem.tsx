import { useNavigate } from 'react-router-dom'
import { Categories } from '../directory/Directory';

import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
} from "./DirectoryItemStyles";

interface DirectoryItemProps {
  category: Categories;
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Compra Ahora</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

// <div
//   className='background-image'
//   imageUrl={imageUrl}
//   style={{
//       backgroundImage: `url(${imageUrl})`
//   }}
// />
