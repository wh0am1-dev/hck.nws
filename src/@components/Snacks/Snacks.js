import React, { createRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { Button } from '@material-ui/core'
import { selectSnack } from '@store/app'
import useStyles from './Snacks.styles'

const SnackWatcher = () => {
  const { enqueueSnackbar } = useSnackbar()
  const snack = useSelector(selectSnack)

  useEffect(() => {
    if (snack) {
      enqueueSnackbar(snack.message ?? 'snack !', {
        variant: snack.variant ?? 'default'
      })
    }
  }, [snack, enqueueSnackbar])

  return null
}

const Snacks = () => {
  const classes = useStyles()
  const snackRef = createRef()
  const onDismiss = key => () => snackRef.current.closeSnackbar(key)

  return (
    <SnackbarProvider
      ref={snackRef}
      maxSnack={3}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      action={key => (
        <Button onClick={onDismiss(key)} variant='contained' color='secondary' size='small'>
          ok
        </Button>
      )}
      classes={{
        variantInfo: classes.info,
        variantError: classes.error
      }}
    >
      <SnackWatcher />
    </SnackbarProvider>
  )
}

export default Snacks
