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

const backlogDomains = ['backlog.com', 'backlog.jp']

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#6CCBA2',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const BacklogSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="backlog-content"
          id="backlog-header"
        >
          <Typography>Backlog</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="backlog-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="backlog-space-key"
              label="Space Key"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="backlog-domain"
              label="Domain"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {backlogDomains.map(domain => <MenuItem key={domain} value={domain}>{domain}</MenuItem>)}
            </TextField>

            <TextField
              id="backlog-project-id"
              label="Project"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
            </TextField>

            <Typography>Item properties</Typography>

            <TextField
              id="backlog-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="backlog-tags"
              label="Tags (import only)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <div className={classes.buttons}>
              <Button variant="contained">Import</Button>
              <Button variant="contained">Export</Button>
            </div>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default BacklogSection
