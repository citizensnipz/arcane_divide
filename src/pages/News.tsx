import { Box, Container } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../components/Post";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/news/newsReducer";
import { Post } from '../store/news/types';


const News: FC = () => {
  const posts: Post[] = useAppSelector(selectPosts);
  const [newsPosts, setNewsPosts] = useState<Post[]>([]);

  useEffect(() => {
    setNewsPosts(posts);
  }, [posts]);

  return (
    <Container>
        <Box sx={{}}>
            {posts.map((p) => {
                return <PostComponent title={p.title} date={p.date} img={p.img} content={p.content} />
            })}
        </Box>
    </Container>
        
  );
};

export default News;
