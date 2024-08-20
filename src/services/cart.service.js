import axios from 'axios';
import http from "../http-common";

const API_URL = 'http://localhost:8080/api/cart/';

class CartService {
  addItemToCart(itemId,itemPrice,itemName,userId) {
    console.log(`${itemId} ${userId}`)
    return axios.post(API_URL + 'add', {
            itemId: itemId,
            itemPrice: itemPrice,
            itemName: itemName,
            userId: userId
        });
  }
 /* 
  getCart(userId){
    return axios.get(API_URL + `${userId}`, {
    })
    .then(response => {
        console.log(response.data);
    })
  }
  */
 getCart(userId){
    return http.get(`/cart/id?id=${userId}`)
 }

 deleteItem(itemId, userId){
    return http.delete(`/cart/deleteitem/${itemId}/${userId}`)
 }

}

export default new CartService();