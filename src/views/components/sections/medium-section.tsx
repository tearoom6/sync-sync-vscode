import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const mediumItemStatuses = ['public', 'draft', 'unlisted']

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#292929',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const MediumSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="medium-content"
          id="medium-header"
        >
          <Typography>Medium</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="medium-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="medium-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="medium-tags"
              label="Tags (comma separated)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="medium-status"
              label="Title"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {mediumItemStatuses.map(status => <MenuItem key={status} value={status}>{status}</MenuItem>)}
            </TextField>

            <div className={classes.buttons}>
              {/* Import API is not provided in Medium. */}
              <Button variant="contained">Export</Button>
            </div>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default MediumSection
