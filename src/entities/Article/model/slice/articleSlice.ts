import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailSchema } from '../types/articleDetailsSchema';
import { fetchArticleData } from '../services/fetchArticleData/fetchArticleData';
import { Article } from '../types/article';

const initialState: ArticleDetailSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        errorReset: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleActions } = articleSlice;

export const { reducer: articleReducer } = articleSlice;
