import React from "react";
import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({
  title,
  authorName,
  authorImg,
  coverPhoto,
  content,
  slug,
  datePublished,
}) => {
  return (
    <div className={styles.card}>      
      <Link href={`/posts/${slug}`}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto} alt={title} />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <div className={styles.imgAuthor}>
              <img src={authorImg} alt={authorName} />
            </div>
            <h3>{authorName}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
