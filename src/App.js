import { useState } from "react";
import "./App.css";
const MEMB =[
  {
    Name:"MKBHD",
    Occupations:"You Tuber",
    image:"img/im5.jpg",
    apple:"",
    instagram:"https://www.instagram.com/mkbhd/",
    youtube:"https://www.youtube.com/user/marquesbrownlee",
    twitter:"https://twitter.com/MKBHD",
    facebook:"https://www.facebook.com/MKBHD",
    linkedin:""



  },
  {
    Name:"Mr.Beast",
    Occupations:"You Tuber",
    image:"img/im1.jpg",
    apple:"",
    instagram:"https://www.instagram.com/mrbeast",
    youtube:"https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA",
    twitter:"https://twitter.com/MrBeast",
    facebook:"",
    linkedin:"https://www.linkedin.com/company/mrbeastyoutube"




  },
  {
    Name:"Madan Gowri",
    Occupations:"You Tuber",
    image:"img/im2.jpg",
    apple:"",
    instagram:"https://www.instagram.com/madangowri",
    youtube:"https://www.youtube.com/channel/UCY6KjrDBN_tIRFT_QNqQbRQ",
    twitter:"https://twitter.com/madan3",
    linkedin:"https://in.linkedin.com/in/madangowri",
    facebook:""


  },
  {
    Name:"Steve jobs",
    Occupations:"Apple co",
    image:"img/im4.jpg",
    apple:"https://www.apple.com/in/",
    instagram:"",
    youtube:"",
    twitter:"",
    facebook:"",
    linkedin:""





  },
  {
    Name:"Elone MusK",
    Occupations:"Tesla co",
    image:"img/im3.jpg",
    apple:"",
    instagram:"",
    youtube:"",
    twitter:"https://twitter.com/elonmusk",
    facebook:"",
    linkedin:""



  },





]

export default function App(){
  return (
    <>
    <Header/>
    <Body />

    </>
  )
}
// body-component
function Body(){
  return (
    <div id="body">
      <CompBody />
    </div>
  )
}
function CompBody(){
  const [BTNclk,setBTNclk]=useState(null)
  const [Name,setName]=useState("")
  const [Occupations,setOccupantions]=useState("")
  const [Image,setImage]=useState("")
  const [Instagram,setInstagram]=useState("")
  const [Youtube,setYoutube]=useState("")
  const [Twitter,setTwitter]=useState("")
  const [Apple,setApple] = useState("")
  const [Linkedin,setLinkedin]=useState("")
  const [Facebook,setFacebook]=useState("")


  return (
    <>
    <div id="member">
      {
        MEMB.map((e,i)=>
        
         <MemberList image = {e.image} Name = {e.Name} Occupations={e.Occupations} instagram={e.instagram} youtube={e.youtube} facebook={e.facebook} linkedin={e.linkedin} apple={e.apple} twitter={e.twitter} number ={i} BTNclk={BTNclk} setBTNclk={setBTNclk} setName={setName} setOccupantions={setOccupantions}
         setImage={setImage}
         setInstagram={setInstagram}
         setYoutube ={setYoutube}

         setTwitter={setTwitter}
         setApple ={setApple}
         setLinkedin={setLinkedin}
         setFacebook ={setFacebook}
         />
        
         )
      }


    </div>
    <div id="details">
      <Memberdescription Name={Name} Occupations={Occupations} Image={Image} Instagram={Instagram} Youtube={Youtube} Facebook={Facebook} Twitter={Twitter} Linkedin={Linkedin} Apple ={Apple}/>


    </div>
    </>
  )
}
function MemberList({image,Name,Occupations,number,BTNclk,setBTNclk,setName,setOccupantions,setImage,setApple,setFacebook,setInstagram,setLinkedin,setYoutube,setTwitter,instagram,apple,youtube,linkedin,facebook,twitter}){
  let getCON = number === BTNclk
  function onbtnclick(){
    setBTNclk(number)
    setName(Name)
    setOccupantions(Occupations)
    setImage(image)
    setInstagram(instagram)
    setApple(apple)
    setFacebook(facebook)
    setYoutube(youtube)
    setLinkedin(linkedin)
    setTwitter(twitter)

    console.log(Name)
  }
  return (
    
      <div className="mem-list-con">


      <img src={image} title={Name} className="mem-img"/>
      <div className="name-occu">
        <span>{Name}</span>
        <span>{Occupations}</span>
      </div>
      <button value={number} onClick={onbtnclick}>{getCON?"Close":"Select"}</button>
      </div>

  
  )
}
function Memberdescription({Name,Occupations,Image,Instagram,Apple,Youtube,Linkedin,Twitter,Facebook}){

  return(
    <>
    <img src={Image} alt={Name} id="details-img"/>
    <span id="details-name">{Name}</span>
    <span id="details-occu">{Occupations}</span>
    <div id="profiles">
        
      <a id="instagram" className="profile-img" href={Instagram} target="new" style={(Instagram=="")?{display:"none"}:{display:"block"}}>
        <img src="img/instagram.png"/>

      </a>
      <a id="youtube" className="profile-img" href={Youtube} target="new" style={(Youtube=="")?{display:"none"}:{display:"block"}}>
      <img src="img/youtube.png"/>




      </a>
      <a id="x" className="profile-img" href={Twitter}target="new" style={(Twitter=="")?{display:"none"}:{display:"block"}}>
      <img src="img/twitter.png"/>



      </a>
      <a id="apple" className="profile-img" href={Apple}target="new" style={(Apple=="")?{display:"none"}:{display:"block"}}>
      <img src="img/apple-logo.png"/>



      </a>
      <a id="linkedin" className="profile-img" href={Linkedin}target="new" style={(Linkedin=="")?{display:"none"}:{display:"block"}}>
      <img src="img/linkedin.png"/>
      


      </a>
      <a id="facebook" className="profile-img" target="new"href={Facebook} style={(Facebook=="")?{display:"none"}:{display:"block"}}>
      <img src="img/facebook-app-symbol.png"/>



      </a>

    

    </div>

    </>
  )
}

// header-component
function Header(){
  return (
    <div id="headline">
      <h1>Devop Media</h1>
    </div>
  )
}
