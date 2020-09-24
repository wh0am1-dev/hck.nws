import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@material-ui/lab'
import { CommentIcon } from '@components/icons'
import useStyles from './Comments.styles'

const Comments = ({ list }) => {
  const classes = useStyles()
  const [show, setShow] = useState(5)

  return (
    <>
      <Typography variant='h4' className={classes.title} gutterBottom align='center'>
        comments <CommentIcon />
      </Typography>

      <Timeline>
        {list.map(
          (comment, idx) =>
            idx < show && (
              <TimelineItem key={comment.id}>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='primary' classes={{ root: classes.dot }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.content}>
                  <Typography variant='h6' gutterBottom>
                    {comment.by}:
                  </Typography>
                  <Typography variant='body1'>
                    <div dangerouslySetInnerHTML={{ __html: comment.text }} />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            )
        )}
      </Timeline>

      {show < list.length && (
        <div className={classes.more}>
          <Button onClick={() => setShow(show + 5)} variant='outlined' color='primary'>
            show more
          </Button>
        </div>
      )}
    </>
  )
}

Comments.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      by: PropTypes.string,
      text: PropTypes.string
    })
  )
}

Comments.defaultProps = {
  list: []
}

export default Comments
