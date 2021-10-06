import axios from 'axios'

function Card({ wall }) {
  const download = () => {
    axios({
      url:'https://i.redd.it/1clmzkw35og71.png',
      method:'GET',
      headers:{
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ",
        "Accept":"image/png"
      }
    })
  }
  return (
    <>
    <div className="bg-gray-300 rounded-sm p-4">
      <img className="object-cover object-center h-full w-full rounded shadow-xl" src={`${wall.preview}`} alt=""></img>
      <div className="py-1">
        <div className="text-lg select-none text-black font-poppins font-semibold">{wall.title}</div>
        <div className="text-sm select-none text-black font-poppins">by ~ {wall.author}</div>
      </div>
      <div className="rounded-sm bg-purple-700 w-24 h-8 font-bold text-white font-poppins flex items-center justify-center select-none">
        <a
          href={wall.url}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
        Download
        </a>
      </div>
    </div>
    </>
  );
}

export default Card;
