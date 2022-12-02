import { createSlice } from '@reduxjs/toolkit'
import { theme } from '../../themes'

const themesSlice = createSlice({
    name: 'themes',
    initialState: theme,
    reducers: {},
})

export { themesSlice }