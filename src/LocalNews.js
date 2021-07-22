import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LocalNews() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);
  

  const loadPosts = async () => {
    try {
      const { data: posts } = await axios.get('posts/');
      const media = [];

      const promises = posts.map((post) => {
        media.push({
          id: post.id,
          title: post.title.rendered,
          description: post.excerpt.rendered,
        });
        return axios.get(`media/${post.featured_media}`);
      });

      Promise.all(promises)
        .then((values) => {
          values.forEach((featuredMedia, i) => {
            media[i] = {
              ...media[i],
              image: featuredMedia.data.guid.rendered,
            };
          });
        })
        .finally(() => {
          setList(media);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {list.map((item, key) => {
        console.log(item);
        return (
          <div key={key}>
            <div>
              <img src={item.image} alt={'s'} />
              <div className='Title'>
                <Link to={`article/${item.id}`}>
                  <h5>{item.title}</h5>
                </Link>
              </div>
              <div className='Title'>
                <h5>{item.description}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default LocalNews;
