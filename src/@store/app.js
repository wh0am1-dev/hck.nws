import { createAction, createReducer } from '@reduxjs/toolkit'

const app = { snack: null }

// ==== selectors ====

export const selectSnack = state => state?.app?.snack

// ==== actions ====

export const addSnack = createAction('app:snack')

// ==== reducer ====

export default createReducer(app, {
  [addSnack]: (app, { payload: snack }) => {
    if (snack) app.snack = typeof snack === 'object' ? snack : { message: snack }
  }
})
