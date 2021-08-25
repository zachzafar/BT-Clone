import axios from 'axios';

const loadPostsfunc = async (type,pagenum,sectionName,func1,func2) => {
  let category;
  let requestRoute;
  try {

  if (type==="section") {
      switch (sectionName) {
        case "sports":
          category = 1544;
          break;
        case "business":
          category = 91;
          break;
        case "regional":
          category = 103;
          break;
        case "politics":
          category = 102;
          break;
        case "local-news":
          category = 99;
          break;
      } 
      requestRoute = `/posts?categories=${category}&per_page=` +(pagenum == null ? "5" : `${pagenum}`);  
  } else if (type==="list"){
    requestRoute = "/posts?per_page=" + (pagenum == null ? "9" : `${pagenum}`)
  } else if (type==="TopStories"){
    requestRoute = "posts?categories=1254&per_page=5"
  } else if (type==="court"){
    requestRoute = "posts?categories=1171&per_page=4"
  } else if (type === "buisness") {
    requestRoute = "posts?categories=91&per_page=2"
  } else if (type === "search"){
    requestRoute = `/posts?search=${sectionName}`
  }

  const { data: posts } = await axios.get(requestRoute);
  
    
      const media = [];

      const promises = posts.map((post) => {
        media.push({
          id: post.id,
          title: post.title.rendered,
          description: post.excerpt.rendered,
        });
        
        return axios.get(`/media/${post.featured_media}`);
      });

      Promise.all(promises)
        .then((values) => {
          values.forEach((featuredMedia, i) => {
            media[i] = {
              ...media[i],
              image: featuredMedia.data.guid.rendered,
            };
          });
        }).catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log(media);
          func1(media);
          func2(true);
        });
    } catch (err) {
      console.log(err);
    }
  };


export default loadPostsfunc;