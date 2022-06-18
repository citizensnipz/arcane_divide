import axios, {AxiosResponse} from "axios";
import { useEffect, FC, useState } from "react";
import { useAppDispatch } from "../hooks"
import { setPosts } from "./newsReducer";
import { Post } from './types'



const NewsUpdater: FC = (): null => {
    const dispatch = useAppDispatch();
    function fetchNewsPostHandler() {
        fetch('http://localhost:3080/api/news').then(response => {
            return response.json();
        }).then(data => {
            console.log('in the fetch: ', data);
            dispatch(setPosts(data));
        });
    }


    useEffect(() => {
        fetchNewsPostHandler()
    }, [])

    return null;
}

export default NewsUpdater;