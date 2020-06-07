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

const docbaseItemScopes = ['everyone', 'group', 'private']

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#222F3E',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const DocbaseSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="docbase-content"
          id="docbase-header"
        >
          <Typography>Docbase</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="docbase-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="docbase-domain"
              label="Domain"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="docbase-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="docbase-tags"
              label="Tags (comma separated)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="docbase-groups"
              label="Groups"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
            </TextField>

            <TextField
              id="docbase-scope"
              label="Format"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {docbaseItemScopes.map(scope => <MenuItem key={scope} value={scope}>{scope}</MenuItem>)}
            </TextField>

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

export default DocbaseSection
