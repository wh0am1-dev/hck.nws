import { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Button, Typography, Chip } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@material-ui/lab'
import { CommentIcon } from './icons'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 800
  },
  dot: {
    margin: theme.spacing(2, 0)
  },
  comments: {
    padding: 0
  },
  content: {
    overflowX: 'hidden'
  },
  author: {
    marginBottom: theme.spacing(1)
  },
  more: {
    textAlign: 'center'
  }
}))

const Comments = ({ list }) => {
  const classes = useStyles()
  const [show, setShow] = useState(5)

  return (
    <>
      <Typography
        variant='h4'
        className={classes.title}
        gutterBottom
        align='center'
      >
        comments <CommentIcon />
      </Typography>

      <Timeline className={classes.comments}>
        {list.map(
          (comment, idx) =>
            idx < show && (
              <TimelineItem key={comment.id}>
                <TimelineSeparator>
                  <TimelineDot
                    variant='outlined'
                    color='primary'
                    classes={{ root: classes.dot }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.content}>
                  <Chip
                    variant='outlined'
                    label={comment.by}
                    className={classes.author}
                  />
                  <Typography
                    variant='body1'
                    component='div'
                    dangerouslySetInnerHTML={{ __html: comment.text }}
                  />
                </TimelineContent>
              </TimelineItem>
            )
        )}
      </Timeline>

      {show < list.length && (
        <div className={classes.more}>
          <Button
            onClick={() => setShow(show + 5)}
            variant='outlined'
            color='primary'
          >
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
