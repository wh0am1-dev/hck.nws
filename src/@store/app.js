import { createAction, createReducer } from '@reduxjs/toolkit'

const app = { snack: null }

// ==== selectors ====

export const selectSnack = state => state?.app?.snack

// ==== actions ====

export const addSnack = createAction('app:snack')

// ==== reducer ====

export default createReducer(app, {
  [addSnack]: (app, { payload: snack }) => {
    if (snack?.msg) app.snack = { msg: snack.msg }
    else if (snack?.info) app.snack = { msg: snack.info, variant: 'info' }
    else if (snack?.success)
      app.snack = { msg: snack.success, variant: 'success' }
    else if (snack?.warning)
      app.snack = { msg: snack.warning, variant: 'warning' }
    else if (snack?.error?.name && snack?.error?.message) {
      app.snack = {
        msg: `${snack.error.name}: ${snack.error.message}`,
        variant: 'error'
      }
    } else if (snack?.error) {
      app.snack = { msg: snack.error, variant: 'error' }
    }
  }
})
