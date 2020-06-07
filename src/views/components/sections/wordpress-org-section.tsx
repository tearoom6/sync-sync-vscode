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

const wordpressOrgItemExtensions = ['html']

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#24282D',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const WordpressOrgSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="wordpress-org-content"
          id="wordpress-org-header"
        >
          <Typography>WordPress.org</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="wordpress-org-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-org-base-url"
              label="Base URL"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-org-extension"
              label="Extension to use in importing"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {wordpressOrgItemExtensions.map(extension => <MenuItem key={extension} value={extension}>{extension}</MenuItem>)}
            </TextField>

            <Typography>Item properties</Typography>

            <TextField
              id="wordpress-org-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-org-tags"
              label="Tags"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
            </TextField>

            <TextField
              id="wordpress-org-categories"
              label="Categories"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
            </TextField>

            <div className={classes.buttons}>
              <Button variant="contained">Create new tag</Button>
              <Button variant="contained">Create new category</Button>
            </div>

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

export default WordpressOrgSection
