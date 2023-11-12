import React, { useEffect, useState } from "react";
import "../style/Body.css";

function Body() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26am.jpg",
    imageName: "Ancient Aliens",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function newMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    const name = allMemes[randomNumber].name;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      imageName: name,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-container">
      <div className="meme-form">
        <input
          placeholder="Top Text"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>

        <input
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
      </div>

      <div className="image-button">
        <button onClick={newMeme}>
          Generate new <i class="fa-solid fa-image"></i>
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />

        <h2 className="meme-text top">{meme.topText}</h2>

        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      <div className="meme-name">{meme.imageName}</div>
    </div>
  );
}

export default Body;
