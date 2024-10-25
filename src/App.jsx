import React, { useState,useEffect } from 'react'
import './App.css'
import Header from './component/Header'
import Menue from './component/Menue'
import Card from './component/card'
import Online from './component/Online'
import Footer from './component/Footer'
 
 
 
const App = () => {
  const[menue,setmenue] =useState([]);
  const[card,setCard] = useState([]);
  const[online,setonline]=useState([]);

  async  function fetchData(){
    const data = await fetch('https://dummyjson.com/c/653a-24d2-4353-a99c');
    const result = await data.json();
    console.log(  result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setmenue(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    setCard(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setonline(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <Header/>
    <Menue menue={menue}/>
    <Card  data={card}/>
    <Online oncard={online}/>
    <Footer/>
    </>
  )
}

export default App
