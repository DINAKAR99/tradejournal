import React, { useEffect, useState } from "react";
import { CountUp } from "use-count-up";
import { CustomNavBar } from "../components/CustomNavBar";
import axios from "axios";
import toast from "react-hot-toast";
import ques from "../images/question.png";
import { color } from "framer-motion";
import { red } from "@mui/material/colors";
 
const Dsa = () => {
  const [usermail, setUsermail] = useState("");
  const [usercompletecount, setUsercompletecount] = useState(0);
  const [usercompleteEasycount, setUsercompleteEasycount] = useState(0);
  const [usercompleteMediumcount, setUsercompleteMediumcount] = useState(0);
  const [usercompleteHardcount, setUsercompleteHardcount] = useState(0);
 
  const [usertopics, setUsertopics] = useState([]);
  const [newcount, setNewcount] = useState(0);
  const [newtopic, setTopic] = useState("");

  useEffect(() => {
    {
       

      if (sessionStorage.getItem("modedmail")) {
        const usermail = sessionStorage.getItem("modedmail");
        setUsermail(usermail);
        //for count 
        axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount.json`
          )
          .then((res) => {
            
            console.log("--------" + Object.values(res.data["easy"]));
            setUsercompleteEasycount(Number(Object.values(res.data["easy"])))
            console.log("--------" + Object.values(res.data["medium"]));
            setUsercompleteMediumcount(Number(Object.values(res.data["medium"])))
            console.log("--------" + Object.values(res.data["hard"]));
            setUsercompleteHardcount(Number(Object.values(res.data["hard"])))
            
            const total=Number(Object.values(res.data["easy"]))+Number(Object.values(res.data["medium"]))+Number(Object.values(res.data["hard"]));
            setUsercompletecount(total);
        
          });

        //for topics
        axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics.json`
          )
          .then((res) => {
            console.log(Object.keys(res.data));
            setUsertopics(Object.keys(res.data));
            if (res.data == null) {
              axios.put(
                `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics.json`,
                { topics: "none" }
              );
            }
          });
      } else {
        window.location = "/";
      }
    }
  }, []);

  const fetcher=()=>{
     //for count 
     axios
     .get(
       `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount.json`
     )
     .then((res) => {
       
       console.log("--------" + Object.values(res.data["easy"]));
       setUsercompleteEasycount(Number(Object.values(res.data["easy"])))
       console.log("--------" + Object.values(res.data["medium"]));
       setUsercompleteMediumcount(Number(Object.values(res.data["medium"])))
       console.log("--------" + Object.values(res.data["hard"]));
       setUsercompleteHardcount(Number(Object.values(res.data["hard"])))
       
       const total=Number(Object.values(res.data["easy"]))+Number(Object.values(res.data["medium"]))+Number(Object.values(res.data["hard"]));
       setUsercompletecount(total);
   
     });

  } 

  const updateQuestionCount = () => { 
      if (newcount==0) {
      // alert("Please enter a question count");
      toast.error("Please enter a question count");
      
        document.getElementById("counter").value = 0;
        setNewcount(0);
        return false;
      } 
      if ( document.getElementById("selecttopic").value=="") {
        toast.error("Please select a topic");
        return false; 
      }
      if (document.querySelector('input[name="flexRadioDefault"]:checked')==null) {
        toast.error("Please select complexity level");
        return false;
      } 
      console.log( document.getElementById("selecttopic").value); 
      console.log(document.querySelector('input[name="flexRadioDefault"]:checked').value);
      const topicselected= document.getElementById("selecttopic").value;
       const complexityLevel =document.querySelector('input[name="flexRadioDefault"]:checked').value; 
      // but check mode  
      // fecth the count and increment and push 
      switch(complexityLevel){
        case "easy":
          // fecth
           
          axios
    .get(
      `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount/easy/count.json`
    ).then((res)=>{
      axios
      .put(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount/easy.json`,
        {count:(Number(res.data)+Number(newcount))}
      )
    })
          
          axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${topicselected}/easy/count.json`
          ).then((res)=>{
            console.log(res.data);
            var easyCount=res.data;
            //push to big count
            
        
            //push to small count
            
              axios
                .put(
                  `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${topicselected}/easy.json`,
                  {count:(Number(easyCount)+Number(newcount))}
                )
                .then((res) => {
                  toast.success("successfully updated");
                  fetcher();
                  setUsercount(res.data);
                }) 
               
             

          })
        
          break;
        case "medium":
          // fecth
          axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount/medium/count.json`
          ).then((res)=>{
            axios
            .put(
              `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount/medium.json`,
              {count:(Number(res.data)+Number(newcount))}
            )
          })
         // fecth
         axios
         .get(
           `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${topicselected}/medium/count.json`
         ).then((res)=>{
           //push to big count
           console.log(res.data);
           var mediumCount=res.data;
          
         
             axios
               .put(
                 `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${topicselected}/medium.json`,
                 {count:(Number(mediumCount)+Number(newcount))}
               )
               .then((res) => {
                toast.success("successfully updated"); 
                fetcher();

                 setUsercount(res.data);
               })
              
           

         })
          break;
        case "hard":
          // fecth
          axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount/hard/count.json`
          ).then((res)=>{
            axios
            .put(
              `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/bigcount/hard.json`,
              {count:(Number(res.data)+Number(newcount))}
            )
          })
          // fecth

          axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${topicselected}/hard/count.json`
          ).then((res)=>{
            //push to big count
            console.log(res.data);
            var hardCount=res.data;
            axios
            .put(
              `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${topicselected}/hard.json`,
              {count:(Number(hardCount)+Number(newcount))}
            )
            .then((res) => {
              toast.success("successfully updated");
              fetcher();

              setUsercount(res.data);
            }) 
            
              
               
           

          })
          break;



      }
  
    
   

  };
  const addNewTopic = () => {
    
    var topic = newtopic;
    if (topic=="") {
      toast.error("please enter a topic");
      return false;
    }
    var formattedTopic = topic.replace(/ /g, "-");
    console.log(formattedTopic);
    toast.promise(
      axios
        .put(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${formattedTopic}.json`,
          JSON.parse(1)
        )
        .then((res) => {
          //easy
          axios
          .put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${formattedTopic}/easy.json`,{count:0})
           
          //medium
          axios
          .put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${formattedTopic}/medium.json`,{count:0})
           
          //hard
          axios
          .put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics/${formattedTopic}/hard.json`,{count:0})
           
          setTopic("")
          document.getElementById("topic").value = "";
           //for topics
        axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${usermail}/dsa/topics.json`
        )
        .then((res) => {
          console.log(Object.keys(res.data));
          setUsertopics(Object.keys(res.data));
           
        });
        }),
      {
        loading: "Saving...",
        success: <b>Topic added!</b>,
        error: <b>Topic not added!</b>,
      }
    );
  };
  ////
  const elements = document.querySelectorAll(".color-changing-text");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    let delay = 1000;

    elements.forEach((element) => {
      if (isInViewport(element)) {
        setTimeout(() => {
          element.classList.add("drop-from-top");
          element.classList.remove("d-none");
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

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <CustomNavBar />
      <div className="container-fluid p-5 bg-white" style={{ marginTop: 60 }}>
        <div
          className="border border-1 border-black rounded px-4 fw-bold  text-center mb-2"
          style={{ fontSize: 30 }}
        >
          <span
            className=" color-changing-text "
            style={{ fontWeight: "lighter" }}
          >
            DSA
          </span>{" "}
          ROADMAP -6 MONTHS
        </div>
        <div className="planner  w-100 h-50 p-4 border border-black border-1 d-md-flex rounded rounded-3 ">
          <div className="bg-light w-50  rounded rounded-3 me-3 p-4 border border-black border-1 ">
            <ul>
              <li className="fw-bolder mb-3">
                Searching and sorting - <span className="red ">1 month</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Sliding window techinque - <span className="red ">1 week</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Hashing - <span className="red ">2 weeeks</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Matrix - <span className="red ">2 weeks</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Linked List - <span className="red ">2 weeks</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Stack - <span className="red ">1 week</span>
              </li>
            </ul>
            <ul>
              <li className="fw-bolder mb-3 ">
                Queue - <span className="red ">1 week</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Trees(BT,BST,HEAP,AVL) - <span className="red ">1 month</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Recursion - <span className="red ">1 week</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Backtracking - <span className="red ">1 week</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Dynamic Programming - <span className="red ">1 month</span>
              </li>
              <li className="fw-bolder mb-3 ">
                Graph - <span className="red ">3 weeks</span>
              </li>
            </ul>
          </div>
          <div
            className="bg-light w-50 fw rounded rounded-3 p-4 border border-black border-1"
            id="questiondiv"
          >
            <div className="fw-bold ">QUESTION COUNTER</div>
            <h6 style={{ fontSize: 12 }}>
              Increase the questions count after solving problems{" "}
            </h6>
            <hr />
            <h1>
              Problems Solved{" "}
              <span className="drop-from-right">
                <CountUp  isCounting end={usercompletecount} duration={3.5} />{" "}
              </span>
              <h5 >
                Hard <span style={{color:"red"}}><CountUp  isCounting end={usercompleteHardcount} duration={3.5}   /></span>{" "}
              </h5>
              <h5>
                Medium <span style={{color:"blue"}}><CountUp isCounting end={usercompleteMediumcount} duration={3.5} /></span>{" "}
              </h5>
              <h5>
                Easy <span style={{color:"green"}}><CountUp isCounting end={usercompleteEasycount} duration={3.5} /></span>{" "}
              </h5>
            </h1>
            <hr />
            <div className=" mt-4 fw-bold  ">
              Questions Completed Today :
              <input
                type="number"
                id="counter"
                className="rounded ms-4 w-25"
                onChange={(e) => setNewcount(e.target.value)}
              />
            </div>
            <div className=" mt-4 fw-bold d-flex mb-3 ">
              <label
                for="fruits"
                className="fw-bold d-flex align-items-center me-2  "
              >
                Topic :
              </label>
              <select
                class="form-select w-50"
                id="selecttopic"
                aria-label="Default select example"
              >
                <option value="">--select--</option>
                {usertopics?.map((topic, index) => (
                  <option key={index}>{topic}</option>
                ))}
              </select>
            </div>
            <div className=" d-flex">
              <div class="form-check me-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="easy"
                   
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Easy
                </label>
              </div>
              <div class="form-check  me-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                     value="medium"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Medium
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                    value="hard"
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  Hard
                </label>
              </div>
            </div>
            <div className="w-100 d-flex   mt-4 ">
              <button
                className="btn "
                style={{ backgroundColor: "lightblue" }}
                onClick={updateQuestionCount}
              >
                Increase count
              </button>
            </div>
            <div className="float-end " id="questionImg">
              {/* <img style={{ width: 350, height: 350 }} src={ques} alt="wdw" /> */}
            </div>
            <hr />
            <div className="d-flex ">
              <div className="fw-bold ">Add New Topic :</div>
              <input
                type="text"
                id="topic"
                className="rounded ms-4 w-50"
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="w-100 d-flex   mt-4 ">
              <button
                className="btn "
                style={{ backgroundColor: "skyblue" }}
                onClick={addNewTopic}
              >
                Add New Topic
              </button>
            </div>
            <hr />
            <div>
              <div className="fw-bold mb-2 ">Existing Topics: </div>
              <button
                className="badge mb-2"
                style={{ backgroundColor: "salmon" }}
                onClick={() => {
                  $(".info").each(function () {
                    this.classList.toggle("d-none");
                    this.classList.add("smoothvisibility");
                  });
                }}
              >
                Expand{" "}
              </button>
              <ol>
                {usertopics?.map((topic, index) => (
                  <li key={index} className="mb-3">
                    {topic}
                   
                    <div className="border border-1 info    d-flex  mt-3 d-none ">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Hard</th>
                            <th>Medium</th>
                            <th>Easy</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="planner  w-100 h-50 p-4 border border-black border-1 d-flex rounded rounded-3 mt-3">
          <div className="bg-light w-100 rounded rounded-3 me-3 p-4 border border-black border-1 ">
            <h4>Important points - </h4>
            <ul className="mt-4">
              <li className="fw-bolder mb-3">
                Learn Java basics , collections , Time And Space complexity
              </li>
              <li className="fw-bolder mb-3 ">
                Java + DSA + Interview Preparation Course By Kunal
              </li>
              <li className="fw-bolder mb-3 ">Use Leetcode , GeeksForGeeks</li>
              <li className="fw-bolder mb-3 ">Focus on easy problems</li>
              <li className="fw-bolder mb-3 ">Learn each topic competely</li>
              <li className="fw-bolder mb-3 ">
                Practice more Random Problems And learn optimisation
              </li>
            </ul>
        <hr />
        <h4>GITHUB FOR PROBLEMS AND LEARNING VIDEOS  </h4>
        <ul>
           
            <li>Syllabus - <a target='_blank' href="https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/SYLLABUS.md"> click here</a></li>
            <li>Assignments - <a target='_blank' href="https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/tree/main/assignments"> click here</a></li>
            
        </ul>
          </div>
        </div>
        <div className="planner  w-100 h-50 p-4 border border-black border-1 d-flex rounded rounded-3 mt-3">
          <div className="bg-light w-100 rounded rounded-3 me-3 p-5 border border-black border-1 ">
            <h1>Resources </h1>
            <div className="row rounded rounded-4 w-100" id="dsa">
              <div className="col-8">
                <ul className="mt-4">
                  <li className="fw-bolder mb-3">Dsa Playlist By Kunal</li>
                  <iframe
                    width="560"
                    height="315"
                    className="rounded rounded-4"
                    src="https://www.youtube.com/embed/videoseries?si=qUeAD4_jjwnXcqMB&amp;list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </ul>
                <ul className="mt-4">
                  <li className="fw-bolder mb-3">Simplified DSA with FRAZ</li>
                  <iframe
                    width="560"
                    height="315"
                    className="rounded rounded-4"
                    src="https://www.youtube.com/embed/iEokYFZu3og?si=hctvZi3uF81eYAch"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </ul>
              </div>
              <div className="col-4">
                <div
                  className="color-changing-text w-50  d-none  "
                  style={{
                    fontSize: 190,
                    fontFamily: "-moz-initial",
                    width: "29%",
                    transform: "rotate(-30deg)",
                  }}
                >
                  D
                </div>
                <div
                  className="color-changing-text  w-50  d-none "
                  style={{
                    fontSize: 130,
                    fontFamily: "cursive",
                    width: "29%",
                    transform: "rotate(-30deg)",
                  }}
                >
                  S
                </div>
                <div
                  className="color-changing-text  w-50  d-none "
                  style={{
                    fontSize: 150,
                    fontFamily: "serif",
                    width: "29%",
                    transform: "rotate(-10deg)",
                  }}
                >
                  A
                </div>
              </div>
            </div>
          </div>
   </div>

   
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

 
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
     </div>
      </div>
    </>
  );
};

export default Dsa;
