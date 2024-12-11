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

      <div className="valuesSection">
        <div className="valuesBackground">
          <div className="valuesGrid1">
            <img src="src/assets/jellyBeanRow.png" alt="" id="valuesImage1" />
          </div>
          <div className="valuesGrid2">
            <h3>Effortless <br />Framing</h3>
            <p>Our prints use standard dimensions—8x10, 11x14, and 16x20—for simple, cost-effective framing. Whether you prefer off-the-shelf frames or custom designs, your new artwork will fit perfectly and match your style.</p>
          </div>
          <div className="valuesGrid3">
            <h3>Bringing “Home” <br />Home</h3>
            <p>Elizabeth Brazil’s art captures her home province’s iconic charm—perfect for those longing for home or celebrating their love of the island. It’s not just art; it’s a connection to your roots.</p>
          </div>
          <div className="valuesGrid4">
            <img src="src/assets/frameImage.png" alt="" id="valuesImage2" />
          </div>
          <div className="valuesGrid5">
            <h3>Supporting Local Communities</h3>
            <p>Every piece of art supports local businesses and craftsmen, from reclaimed frames to independently printed works. When you buy from Newfound Art Co., you’re investing in Newfoundland’s community.</p>
          </div>
          <div className="valuesGrid6">
            <img src="src/assets/oldBoat.png" alt="" id="valuesImage3" />
          </div>
          <h1 className='valuesTitle'>Our Values</h1>
        </div>
      </div>

      <div className="featureSection">
        <h1>Featured Collection</h1>
        <p>The Seasonal Collection</p>
        <p>Celebrating Newfoundland and Labrador’s Festive Spirit Through Art</p>
        <div className="featureBox">
          <div className="featureTile">
            <img src="src/assets/Santa1.png" alt="" />
            <h3>Santa at the Cape</h3>
          </div>
          <div className="featureTile">
            <img src="src/assets/Santa2.png" alt="" />
            <h3>Heritage Santa</h3>
          </div>
          <div className="featureTile">
            <img src="src/assets/Santa3.png" alt="" />
            <h3>Santa’s Mummers</h3>
          </div>
        </div>
        <img src="src/assets/smallRope.png" alt="" id="leftRope"/>
        <img src="src/assets/smallRope.png" alt="" id="rightRope"/>
        <button className="featureButton">GET YOURS</button>
      </div>

      <div className="artistSection">
        <img src="src/assets/artistImage.png" alt="" />
        <div className="artistRightSide">
          <div className="artistText">
            <h1>The Artist</h1>
            <h3>Elizabeth Brazil</h3>
            <p>
              Elizabeth Brazil is a proud Newfoundlander whose life and art have been shaped by the island's rugged beauty and rich cultural heritage. Having lived across the island, she draws inspiration from the cliffs of the east, the glacial mountains of the west, and the vibrant outport communities in-between. Her art reflects the traditions of her lineage—steeped in storytelling, music, and maritime life—blending these influences into a whimsical style that celebrates the essence of Newfoundland and Labrador.
              <br /><br />
              Rooted in the cultural revival of the 1960s and 70s, Elizabeth’s work bridges traditional folk art with contemporary expression. Through distorted forms, vibrant colours, and exaggerated motifs, she breathes life into iconic Newfoundland imagery. Her creations extend beyond paintings, incorporating handcrafted elements, making each piece a blend of heritage and sustainability.
              <br /><br />
              Elizabeth is committed to community. She supports outport projects and works exclusively with local businesses for supplies, framing, and marketing. Her vision is to nurture an artistic collective that celebrates Newfoundland’s traditions while inspiring collaboration and creativity across generations. 
            </p>
          <div className="artistBottom">
            <p>Through her work, Elizabeth strives to preserve and share the stories of her home.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;