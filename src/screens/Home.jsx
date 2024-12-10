import React from 'react'

const Home = () => {
  return (
    <>
    
      <div className='hero'>
        <div className="backgroundFilter"></div>
        <h1 className='heroText'>Original Newfoundland and Labrador-inspired artwork <br/>
        by Elizabeth Brazil</h1>
        <img id="NFALogo" src="src/assets/NFALogo.png" alt="NewFound Art Logo" />
        <img id="PaintBlotch" src="src/assets/PaintBlotch.png" alt="Blotch of Paint" />
        <div className="heroButtons">
          <button className="heroButton1">GET YOURS</button>
          <button className="heroButton2">JOIN CREW</button>
        </div>
      </div>

      <div className="ourStory">
        <h1 className="ourStoryTitle">Our Story</h1>
        <img id="ropeImage" src="src/assets/Rope3Knots.png" alt="RopeImage" />
        <div className="storyParts">
          <div className="storyPart">
            <h3>NFLD: A Heritage of Creativity</h3>
            <p>For generations, Newfoundland and Labrador’s art has preserved stories of its land, sea, and people. Folk art and craft, passed down through families and communities, weave the province’s rich heritage into every piece.</p>
          </div>
          <div className="storyPart">
            <h3>Keeping Stories Alive</h3>
            <p>Elizabeth Brazil’s work celebrates Newfoundland and Labrador’s vibrant traditions, blending local folklore, maritime culture, and whimsical creativity. Her art brings landmarks, heritage, and community spirit into homes worldwide, preserving a connection to “home.”</p>
          </div>
          <div className="storyPart">
            <h3>A Growing Community</h3>
            <p>Newfound Art Co. is more than art, it’s a collective vision to connect creators and admirers who share a love for Newfoundland and Labrador culture and creativity - it’s an avenue to carry tradition forward through in-person and online community.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home