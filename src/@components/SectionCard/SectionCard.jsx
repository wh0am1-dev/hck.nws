import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { SectionIcon } from '@components/icons'
import useStyles from './SectionCard.styles'

const SectionCard = ({ title, img, icon, onClick, tabIndex }) => {
  const classes = useStyles()
  const [elevate, setElevate] = useState(false)

  return (
    <Card
      elevation={elevate ? 4 : 0}
      className={clsx(classes.card, elevate && classes.cardHover)}
      onMouseEnter={() => setElevate(true)}
      onMouseLeave={() => setElevate(false)}
      onTouchStart={() => setElevate(true)}
      onTouchEnd={() => setElevate(false)}
    >
      <CardActionArea onClick={onClick} tabIndex={tabIndex}>
        <CardMedia className={classes.cardMedia} component='img' src={img} title={title} />
        <CardContent className={classes.cardTitle}>
          <Grid container spacing={2} alignItems='center'>
            <Grid item classes={{ root: classes.icon }}>
              {icon}
            </Grid>
            <Grid item>
              <Typography variant='h5' classes={{ root: classes.title }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

SectionCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number
}

SectionCard.defaultProps = {
  title: 'SectionCard',
  img: '',
  icon: <SectionIcon />,
  onClick: () => {},
  tabIndex: 0
}

export default SectionCard
