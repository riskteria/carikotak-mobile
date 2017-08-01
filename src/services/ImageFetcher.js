import { API_URL } from 'react-native-dotenv';
import { SQUARE_SMALL, SQUARE_MEDIUM, SQUARE_BIG } from 'constants/imageRatio';
import {
  PORTRAIT_MEDIUM,
  PORTRAIT_MEDIUM_BIG,
  PORTRAIT_BIG
} from 'constants/imageRatio';

const USER_DEFAULT_IMAGE = API_URL + '/storage/users/default.png';
const PRODUCT_DEFAULT_IMAGE = API_URL + '/';
const POST_DEFAULT_IMAGE = API_URL + '/';

export const loadImageUser = (image = null, size = 'medium') => {
  if (!image || image === 'users/default.png') {
    return USER_DEFAULT_IMAGE;
  }

  switch (size) {
    case 'small':
      return SQUARE_SMALL + image;
    case 'medium':
      return SQUARE_MEDIUM + image;
    case 'big':
      return SQUARE_BIG + image;
    default:
      return USER_DEFAULT_IMAGE;
  }
};

export const loadImageProduct = (images = null, size = 'medium') => {
  if (!images || images.length === 0) {
    return PRODUCT_DEFAULT_IMAGE;
  }

  let image = images;

  if (images instanceof Array) {
    image = images[0];
  }

  switch (size) {
    case 'medium':
      return PORTRAIT_MEDIUM + image;
    case 'medium-big':
      return PORTRAIT_MEDIUM_BIG + image;
    case 'big':
      return PORTRAIT_BIG + image;
    default:
      return PRODUCT_DEFAULT_IMAGE;
  }
};

export const loadImagePost = (image = null, size = 'small') => {
  if (!image) {
    return POST_DEFAULT_IMAGE;
  }

  switch (size) {
    case 'medium':
      return PORTRAIT_MEDIUM + image;
    case 'medium-big':
      return PORTRAIT_MEDIUM_BIG + image;
    case 'big':
      return PORTRAIT_BIG + image;
    default:
      return POST_DEFAULT_IMAGE;
  }
};
