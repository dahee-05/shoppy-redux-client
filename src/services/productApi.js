import { axiosPut, axiosPost, axiosDelete, axiosGet } from './api.js';
import { setProductList, setProduct, setImgList, setDetailImgList, setSize } from '../features/product/productSlice.js';

/*****************************
 * 1.상품 리스트 조회
 ****************************/
export const getProductList = () => async(dispatch) =>{
  const url='http://3.35.233.94:9000/product/all';
  const data = null;

  const result = await axiosGet({url, data});
  dispatch(setProductList({result}));
};


/*****************************
 ** 2.상품 상세
 ****************************/
export const getProduct = (pid) => async(dispatch) =>{
  const url ='http://3.35.233.94:9000/product/detail';
  const data ={"pid" :pid};

  const result =  await axiosPost({url, data});
  const product = result;
  const imgList = result.imgList;
  const detailImgList = result.detailImgList;

    dispatch(setProduct({product}));
    dispatch(setImgList({imgList}));
    dispatch(setDetailImgList({detailImgList}));
}; 


/*****************************
 ** 사이즈 조회
 ****************************/
export const getSize = (size) => (dispatch) =>{
  dispatch(setSize({size}))
};

/*****************************
 * 
 ****************************/