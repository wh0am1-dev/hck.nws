import React, { createRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { Button, useMediaQuery, useTheme } from '@material-ui/core'
import { selectSnack } from '@store/app'
import useStyles from './Snacks.styles'

const SnackWatcher = () => {
  const { enqueueSnackbar } = useSnackbar()
  const snack = useSelector(selectSnack)

  useEffect(() => {
    if (snack) {
      enqueueSnackbar(snack.message ?? 'snack !', {
        variant: snack.variant ?? 'default',
        persist: true
      })
    }
  }, [snack, enqueueSnackbar])

  return null
}

const Snacks = () => {
  const classes = useStyles()
  const theme = useTheme()
  const topRight = useMediaQuery(theme.breakpoints.up('sm'))

  const snackRef = createRef()
  const onDismiss = key => () => snackRef.current.closeSnackbar(key)

  return (
    <SnackbarProvider
      ref={snackRef}
      maxSnack={1}
      anchorOrigin={{ horizontal: topRight ? 'right' : 'center', vertical: 'top' }}
      action={key => (
        <Button onClick={onDismiss(key)} variant='contained' color='secondary' size='small'>
          ok
        </Button>
      )}
      classes={{
        root: classes.root,
        variantInfo: classes.info,
        variantError: classes.error
      }}
    >
      <SnackWatcher />
    </SnackbarProvider>
  )
}

export default Snacks
