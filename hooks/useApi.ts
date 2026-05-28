import{useEffect, useState} from 'react';
import { API_CONFIG } from '../config/api.config';

export const useApi = () =>{
 const[loading,setLoading] = useState(true);
 const [data,setData] = useState<any[]>([]);

 useEffect(()=>{ fetchFoods()},[]);
 const fetchFoods = async()=>{
    const response = await fetch(`${API_CONFIG.BASE_URL}`)
    const json = await response.json();
    setData(json.meals);
    setLoading(false);
 }

 return{loading,data};

}