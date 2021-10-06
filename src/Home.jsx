import { Link, useHistory } from "react-router-dom";
import { useState } from 'react'
function Home() {
  const history = useHistory()
  const [subreddit, setSubreddit] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if(!subreddit) {
      alert('enter subreddit you wanna get posts from')
    }
    history.push(`r/${subreddit}`)
  }
  return (
    <div className="bg-gray-900 font-poppins">
      <div className="p-5 text-indigo-600 text-4xl">ReDxWalls</div>
      <div className="flex justify-center">
      <form className="w-10/12 h-12" onSubmit={handleSearch}>
        <input
          className="
            text-center
            text-white
            rounded-full
            bg-white
            bg-opacity-0
            w-full h-12
            outline-none
            ring-gray-400
            ring-2
            focus:ring-indigo-600
            focus:ring-2
          "
          type='text'
          placeholder='Enter subreddit'
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        ></input></form>
      </div>
      <div className="flex justify-center">
        <div className="flex-initial min-w-screen">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 p-4">
            <li>
              <Link to={"r/wallpapers"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/wallpapers
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/wallpaper"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/wallpaper
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/multiwall"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/multiwall
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/designporn"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/designporn
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/ImaginaryLandscapes"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/ImaginaryLandscapes
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/ImaginarySeascapes"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/ImaginarySeascapes
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/ImaginaryColorscapes"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/ImaginaryColorscapes
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/aestheticrain"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/aestheticrain
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/earthporn"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/earthporn
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/spaceporn"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/spaceporn
                </button>
              </Link>
            </li>
            <li>
              <Link to={"r/amoled"}>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  r/amoled
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex items-center"></div>
    </div>
  );
}
export default Home;
