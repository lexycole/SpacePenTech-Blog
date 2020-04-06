import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';

export default () => {
    const posts = usePosts();
    
    return (
        <>
        <Hero />
    <Layout>
   <h2>Read our blogs</h2>
   {posts.map(post => (
      <PostPreview key={post.slug} post={post}/>
   ))}
   <Insta />
    </Layout>
   </>
    );
};
