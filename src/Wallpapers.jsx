import Card from "./Card"
import axios from "axios"
import { useRef, useCallback, useState, useEffect} from 'react'

function Wallpapers({ match }) {
  //axios.get('http://i.redd.it/1clmzkw35og71.png').catch(err => {console.log(err);});
  // axios
  //     .get(
  //       'https://source.unsplash.com/random/500x500',
  //       {
  //         responseType: 'arraybuffer',
  //         headers:{'Access-Control-Allow-Origin': '*'}
  //       },
  //     )
  //     .then(response => {
  //       const base64 = btoa(
  //         new Uint8Array(response.data).reduce(
  //           (data, byte) => data + String.fromCharCode(byte),
  //           '',
  //         ),
  //       );
  //       this.setState({ source: "data:;base64," + base64 });
  //     });
  const [walls, setWalls] = useState([])
  const [id, setId] = useState('')
  const [kind, setKind] = useState('')
  const [loadMoreId, setLoadMoreId] = useState('')
  
  const observer = useRef()
  const lastWallRef = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('visible')
        setLoadMoreId(id)
      }
    })
    if (node) observer.current.observe(node)
  })
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.reddit.com/r/${match.params.subreddit}/hot.json?&limit=40&raw_json=1`)
      const resultData = []
      result.data.data.children.map((post) => (
        post.data.preview?.images[0]?.resolutions[3]?.url? resultData.push({
          preview:post.data.preview.images[0].resolutions[3].url,
          permalink:post.data.permalink,
          url:post.data.url,
          title:post.data.title,
          author:post.data.author,
          ups:post.data.ups,
          id:post.data.id
        }) : ''
      ))
      setId(resultData[resultData.length-1].id)
      setKind(resultData[resultData.length-1].kind)
      // alternative method
      
      // result.data.data.children.forEach((post) => {
      //   post.data.preview ? resultData.push({
      //     preview:post.data.preview.images[0].resolutions[3].url,
      //     title:post.data.title,
      //     author:post.data.author,
      //     ups:post.data.ups
      //   }) : ''
      // });
      
      setWalls(resultData)
      }
      fetchItems()
  }, [])
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.reddit.com/r/wallpaper/hot.json?&limit=20&raw_json=1&after=${kind}_${loadMoreId}`)
      const resultData = []
      result.data.data.children.map((post) => (
        post.data.preview?.images[0]?.resolutions[3]?.url? resultData.push({
          preview:post.data.preview.images[0].resolutions[3].url,
          permalink:post.data.permalink,
          url:post.data.url,
          kind:post.kind,
          title:post.data.title,
          author:post.data.author,
          ups:post.data.ups,
          id:post.data.id
        }) : ''
      ))
      setId(resultData[resultData.length-1].id)
      setKind(resultData[resultData.length-1].kind)
      setWalls([...walls, ...resultData])
      }
      fetchItems()
  }, [loadMoreId])
  return (
    <>
      {walls.map((post, index) =>
        (walls.length === index + 1) ?
        <li className="list-none" key={post.id} ref={lastWallRef}>
          <Card wall={post} />
        </li> : 
        <li className="list-none" key={post.id}>
          <Card wall={post}/>
        </li>
      )}
    </>
  );
}

export default Wallpapers;