import axios from 'axios'

 axios.interceptors.response.use(function (response){
  return response.data.data;
 })

// 请求home组件数据接口 一般定义接口用 const  
export const getHome =()=>{
  return axios.get("./static/mock/week/index.json")
} 

// 请求cities组件数据接口 
export const getCities =()=>{
  return axios.get("./static/mock/week/city.json")
} 

// 请求detail组件数据接口 
export const getDetails =(id)=>{
  return axios.get("./static/mock/detail/"+id+".json")
} 