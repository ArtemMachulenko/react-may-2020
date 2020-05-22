import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import TestCard, { PostCard as Card } from '../post-card/PostCard';
// todo: достать в строке 7 массив allComments из констант
import {allComments} from "../../constants";
import { postsList, usersList } from '../../constants'; // todo помимо константы postsList достать еще usersList
// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import {UserCard} from "../user-card/UserCard";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// console.log(allComments);
// console.log(postsList)
// console.log(usersList);
function App() {
  const renderList = () => {
    const res = [];

    for (let i = 0; i < 6; i++) {
      const item = postsList[i];
      res.push(<Card post={item} key={item.id}/>)
    }

    return res;
  };

  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>

      {/*<div className="d-flex posts-container">*/}
      {/*  {*/}
      {/*    renderList()*/}
      {/*  }*/}
      {/*</div>*/}

      <div className="d-flex posts-container">
        {
          postsList.map((post, index) => {
            const odd = post % 2 !== 0;
            // todo: найти в массиве usersList пользователя, айди которого равно user_id в посте (т.е. в данном случае item)
            //  для этого можно использовать функцию массива find или findIndex
            //  передать имя и фамилию пользователя как пропсу author в Card
            //  использовать для этого стринговый литерал ``
            //  в Card под телом поста срендерить имя автора, используя blockquote-footer класс из бутстрапа
            //  пример тут: https://hackerthemes.com/bootstrap-cheatsheet/#blockquote-footer

              const {first_name, last_name} = usersList.find(user => user.id === post.user_id);

            // todo: найти в массиве allComments комментарии, post_id которых = id поста  (т.е. в данном случае item.id)
            //  для этого можно использовать метод массива filter
            //  передать этот массив в Card как пропсу под названиес comments

              const comments = allComments.filter(comment => comment.post_id === post.id);
              if (!comments.length) return null;

              return <Card post={post} key={post.id} hasImage={odd} author={`${first_name} ${last_name}`} comments={comments} />
          })
        }
      </div>

      <div className="d-flex posts-container">
      {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
          {
              usersList.map(user => {
               return (
                   <UserCard user={user} />
               );
           })
          }
      </div>

      <Footer />
    </div>
  );
}

export default App;
