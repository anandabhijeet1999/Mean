import {useState, useEffect , useContext} from 'react'
import { ThemeStore } from './ThemeContext';
const  useProductData = (id)=> {
    
    const [data, setData] = useState(null);
    const them = useContext(ThemeStore);
  
    const { theme , setTheme} = useContext(ThemeStore);
  
    const productData = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const productData = await data.json();
      setData(productData);
    };
    useEffect(() => {
      productData();
    }, []);

    return data;
}

export default useProductData;
