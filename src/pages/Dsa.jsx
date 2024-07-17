import React, { useEffect, useState } from 'react'
import { CountUp } from 'use-count-up'
import { CustomNavBar } from '../components/CustomNavBar'
import axios from 'axios';
import { string } from 'yup';
import toast from 'react-hot-toast';
import ques from "../images/question.png"
const Dsa = () => {
const[usermail,setUsermail]=useState("");
const[usercount,setUsercount]=useState(0);
const[newcount,setNewcount]=useState(0);
 
    useEffect(()=>{
        {
            if ( sessionStorage.getItem('modedmail')) {
                const usermail=sessionStorage.getItem('modedmail')
                setUsermail(usermail);
                axios
                .get(
                  `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/count.json`
                )
                .then((res) => {
                  console.log("--------"+res.data);
                  setUsercount(res.data)
                  if (res.data==null) {
                    axios
                    .put(
                      `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/count.json`,1
                    )
                    setUsercount(1)
                  }}
                
              )
            }
            else{
                window.location="/"
            }
                } 
    },[]) 
    const  updateQuestionCount=()=>{
        const updated=(Number(usercount)+Number(newcount));
                toast.promise(
            axios
            .put(
              `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/count.json`, updated
            ).then(res=>{
                console.log("updated:"+ res.data);
                setUsercount(res.data)
            }),
             {
               loading: 'Saving...',
               success: <b>Count Updated!</b>,
               error: <b>Count Not Updated!</b>,
             }
           );
        if (newcount==="") {
            document.getElementById("counter").value=0;
            setNewcount(0)            
            
           

        }
        else
        {
           
           
        }
    }


    ////
    const elements = document.querySelectorAll('.color-changing-text');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    function handleScroll() {
        let delay = 1000;

      elements.forEach(element => {
        if (isInViewport(element)) {
          setTimeout(() => {
            element.classList.add('drop-from-top');
          element.classList.remove('d-none');
          }, delay);
          delay += 1000;
        }
      });
    
    //   // Once an element is animated, remove the scroll listener to prevent unnecessary checks
    //   elements.forEach(element => {
    //     if (element.classList.contains('drop-from-top')) {
    //       window.removeEventListener('scroll', handleScroll);
    //     }
    //   });
    }
    
    window.addEventListener('scroll', handleScroll);

  return (<>
  <CustomNavBar/>
  <div className="container-fluid p-5 bg-white" style={{marginTop:60}}>
    <div className='border border-1 border-black rounded px-4 fw-bold  text-center mb-2' style={{fontSize:30}}><span className=' color-changing-text ' style={{fontWeight:"lighter"}}>DSA</span> ROADMAP -6 MONTHS</div>
   <div className="planner  w-100 h-50 p-4 border border-black border-1 d-md-flex rounded rounded-3 "  >
    <div className="bg-light w-50  rounded rounded-3 me-3 p-4 border border-black border-1 ">
        <ul >
            <li className='fw-bolder mb-3'>Searching and sorting - <span className='red '>
                1 month
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Sliding window techinque - <span className='red '>
                1 week
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Hashing  - <span className='red '>
                2 weeeks
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Matrix - <span className='red '>
                 2 weeks
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Linked List - <span className='red '>
                2 weeks
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Stack - <span className='red '>
                1 week
                </span>
                </li>
            
        </ul>
        <ul  >
            <li className='fw-bolder mb-3 '>Queue - <span className='red '>
                1 week
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Trees(BT,BST,HEAP,AVL) - <span className='red '>
                1 month
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Recursion  - <span className='red '>
                1 week
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Backtracking - <span className='red '>
                 1 week
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Dynamic Programming - <span className='red '>
                1 month
                </span>
                </li>
            <li className='fw-bolder mb-3 '>Graph - <span className='red '>
                3 weeks
                </span>
                </li>
            
        </ul>
    </div>
    <div className='bg-light w-50 fw rounded rounded-3 p-4 border border-black border-1' id="questiondiv">
    QUESTION COUNTER 
        <h6 style={{fontSize:12}}>Increase the questions count after solving problems </h6>
        <hr />
         <h1>Problems Solved   <span>
         <CountUp   isCounting end={usercount} duration={3.5} /> </span></h1>  
<hr />
<div className=' mt-4 '>Questions Completed Today :
<input type="number" id='counter'  className='rounded ms-4 w-25'   onChange={(e)=>setNewcount(e.target.value)} />
 
</div>
<div className='w-100 d-flex   mt-4 ' ><button className='btn ' style={{backgroundColor:'lightblue'}} onClick={updateQuestionCount}>Increase count</button></div>

<div className='float-end ' id='questionImg'>
    <img  style={{width:350,height:350}} src={ques} alt="wdw" />
</div>
        </div>
   </div>
   <div className="planner  w-100 h-50 p-4 border border-black border-1 d-flex rounded rounded-3 mt-3"  >
   <div className="bg-light w-100 rounded rounded-3 me-3 p-4 border border-black border-1 ">
        <h6>Important points --- </h6>
        <ul className='mt-4'>
            <li className='fw-bolder mb-3'>Learn Java basics , collections , Time And Space complexity   
                </li>
            <li className='fw-bolder mb-3 '>Java + DSA + Interview Preparation Course By Kunal 
                </li>
            <li className='fw-bolder mb-3 '>Use Leetcode , GeeksForGeeks   
                </li>
            <li className='fw-bolder mb-3 '>Focus on  easy problems  
                </li>
            <li className='fw-bolder mb-3 '>Learn each topic competely 
                </li>
            <li className='fw-bolder mb-3 '>Practice more Random Problems And learn optimisation  
                </li>
            
        </ul>
    </div>  
   
   </div>
   <div className="planner  w-100 h-50 p-4 border border-black border-1 d-flex rounded rounded-3 mt-3"  >
   <div className="bg-light w-100 rounded rounded-3 me-3 p-5 border border-black border-1 ">
        <h1>Resources </h1>
    <div className='row rounded rounded-4 w-100'id='dsa'  >
        <div className='col-8' >
        <ul className='mt-4'>
            <li className='fw-bolder mb-3'>Dsa Playlist By Kunal 
                </li>
                <iframe width="560" height="315" className='rounded rounded-4' src="https://www.youtube.com/embed/videoseries?si=qUeAD4_jjwnXcqMB&amp;list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </ul>
        <ul className='mt-4'>
            <li className='fw-bolder mb-3'>Simplified DSA with FRAZ 
                </li>
                <iframe width="560" height="315" className='rounded rounded-4'  src="https://www.youtube.com/embed/iEokYFZu3og?si=hctvZi3uF81eYAch" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </ul>
        </div>
        <div className='col-4' >
            <div className='color-changing-text w-50  d-none  ' style={{fontSize:190,fontFamily:"cursive", width:'29%',transform: 'rotate(-30deg)'}}>D</div>
            <div className='color-changing-text  w-50  d-none ' style={{fontSize:130,fontFamily:"cursive", width:'29%', transform: 'rotate(-30deg)'}}>S</div>
            <div className='color-changing-text  w-50  d-none ' style={{fontSize:150 ,fontFamily:"cursive", width:'29%' ,transform: 'rotate(-10deg)'}}>A</div>
        </div>
    </div>
    </div>  
   
   </div>
  </div>
  </>
  )
}

export default Dsa