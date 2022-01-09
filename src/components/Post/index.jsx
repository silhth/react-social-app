import { useState } from "react";
import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";
import { httpDELETE } from "../../libs/http";

import Modal from "./../Modal";
import styles from "./Post.module.scss";

const Post = (props) => {
  const data = props.data || {
    author: "User",
    text: "text",
    date: new Date(),
    photo:
      "https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
  };

  const handleDeletePost = () => {
    httpDELETE(`/posts/${props.data.id}`).then(() => {});
    setModalVisibile(true);

    setTimeout(() => {
      setModalVisibile(false);
      window.location.href = "/";
    }, 3000);
  };

  const [isModalVisible, setModalVisibile] = useState(false);

  return (
    <article className={styles.post}>
      {isModalVisible && (
        <Modal bgColor="lightcoral" text="Il post è stato rimosso" />
      )}
      <button onClick={handleDeletePost} className={styles.deleteBtn}>
        X
      </button>

      <h3>{data.author}</h3>
      <p>
        <small>
          {formatDistance(new Date(data.date), new Date(), {
            addSuffix: true,
            locale: it,
          })}
        </small>
      </p>
      <p>{data.text}</p>

      {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}

      {/*
      Per gestire condizioni più complesse posso richiamare una funzione 
      
      hasImage(data.photo) 
      */}
    </article>
  );
};

export { Post };