// src/store/postsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: null,
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data as Post[];
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Fetching posts failed";
      });
  },
});

export default postsSlice.reducer;
