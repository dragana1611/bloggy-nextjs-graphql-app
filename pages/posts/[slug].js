import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import styles from "../../styles/Slug.module.css";

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      datePublished
      id
      slug
      title
      content {
        html
      }
      coverPhoto {
        id
        url
      }
      author {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const hygraph = new GraphQLClient(
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cln82njelfxmj01uobkoa82a2/master"
);

export async function getStaticPaths() {
  const { posts } = await hygraph.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await hygraph.request(query, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const SinglePost = ({ post }) => {
  return (
    <main className={styles.blog}>
      <h1>Post</h1>
      <Link href={'/'}>
        <div className={styles.btn}>
          <span>&#8592;</span> Home
        </div>
      </Link>
      <div>
        <img
          src={post.coverPhoto.url}
          alt={post.slug}
          className={styles.cover}
        />
      </div>
      <div className={styles.title}>
        <div>
          <img src={post.author.avatar.url} alt={post.author.avatar.name} />
        </div>
        <div className={styles.authtext}>
          <h6>By {post.author.name}</h6>
          <h6 className={styles.date}>{post.datePublished}</h6>
        </div>
      </div>
      <h2>{post.title}</h2>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
};

export default SinglePost;
