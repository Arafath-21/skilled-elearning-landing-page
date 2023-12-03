import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./sass/main.scss";

const data=[
  {
  isBg:true,
  name:"Check out our most popular courses!"
  },
  {
    isBg:false,
    name:"Animation",
    para1:"Learn the latest animation",
    para2:"techniques to create stunning",
    para3:"motion design and captivate your",
    para4:"audience.",
    an:"Get Statred",
  },
  {
    isBg:false,
    name:"Animation",
    para1:"Create beautiful, usable",
    para2:"techniques to create stunning",
    para3:"motion design and captivate your",
    para4:"audience.",
    an:"Get Statred",
  },
  {
    isBg:false,
    name:"Animation",
    para1:"Learn the latest animation",
    para2:"techniques to create stunning",
    para3:"motion design and captivate your",
    para4:"audience.",
    an:"Get Statred",
  },
  {
    isBg:false,
    name:"Animation",
    para1:"Learn the latest animation",
    para2:"techniques to create stunning",
    para3:"motion design and captivate your",
    para4:"audience.",
    an:"Get Statred",
  },
  {
    isBg:false,
    name:"Animation",
    para1:"Learn the latest animation",
    para2:"techniques to create stunning",
    para3:"motion design and captivate your",
    para4:"audience.",
    an:"Get Statred",
  },
  ]

function App() {
  return (
    <>
      <Navbar data={"Get Started"}/>
      <Content heading="Maximize skill," head="minimize budget" para = "Our modern courses across a range in-demand" para1 = "skills will give you the knowledge you neto live" para2 = "the life you want."
      data={"Get Started"}/>
      {/* Card */}
      <section className="pricing py-5">
        <div className="container price">
          <div className="row">{
            data.map((e,i)=>{
              return <Card data={e} key={i}/>
            })
          }
          </div>
        </div>
      </section>  
        <Footer data={"Get Started"}/>
    </>
  )
}

export default App
