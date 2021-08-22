import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const API_URL = 'http://localhost:8080'
const mapboxToken= 'pk.eyJ1Ijoib2ttYXJjb3MiLCJhIjoiY2tzbjd0c2FpMTNjZjJvcDFjenl2dmQ0ZCJ9.pghrvwXpBXtXQdfZapJJcw';

export function fetchProducts(){
  return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayLoad){
  return axios.post(`${API_URL}/orders`, payload)
}