import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:9000';

export const noteSlice = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
     tagTypes: ['notes'],
    endpoints: (builder) => ({
       
        fetchNotes: builder.query({
          query: () => {
            return {
              url: 'notes',
              method: 'GET'   
            } 
           
          } , 

          providesTags: ['notes'],

        }),

        addNote: builder.mutation({
            query: (newNote) => {
                return {
                    url: 'create_note',
                    method: 'POST',
                    body: newNote,
                }
            },
            
            invalidatesTags: ['notes']
        }),
        edditNote: builder.mutation({
            query: ({noteId, updateNote}) =>{
            return{
                url: `update_note/${noteId}`,
                method: 'PUT',
                body: updateNote
            }
            },
            invalidatesTags: ['notes']

        }),
        deleteNote: builder.mutation({
            query: (noteId) => {
                return {
                 url: `delete_note/${noteId}`,
                 method: 'DELETE'
                }
            },

            invalidatesTags: ['notes']

        })
    })
})



export const {useFetchNotesQuery, useAddNoteMutation, useEdditNoteMutation, useDeleteNoteMutation} = noteSlice
export default noteSlice