import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#F08633',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const BloggerSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="blogger-content"
          id="blogger-header"
        >
          <Typography>Blogger</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="blogger-api-key"
              label="API Key"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="blogger-blog-id"
              label="Blog ID"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="blogger-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="blogger-labels"
              label="Labels (comma separated)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <div className={classes.buttons}>
              <Button variant="contained">Import</Button>
              {/* Export API needs to be authorized by OAuth 2.0, and I do not implement it yet. */}
            </div>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default BloggerSection
