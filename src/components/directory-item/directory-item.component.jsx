import {
  DirectoryBody,
  DirectoryItemContainer,
  BackgroundImage,
} from "./directory-item.styles";

import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onClickHandler = () => navigate(route);
  return (
    <DirectoryItemContainer>
      <BackgroundImage onClick={onClickHandler} imageUrl={imageUrl} />
      {/* <img src=''></img> */}
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
