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

const wordpressComItemExtensions = ['html', 'md']

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#3885B9',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const WordpressComSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="wordpress-com-content"
          id="wordpress-com-header"
        >
          <Typography>WordPress.com</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="wordpress-com-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-com-site"
              label="Site"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-com-extension"
              label="Extension to use in importing"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {wordpressComItemExtensions.map(extension => <MenuItem key={extension} value={extension}>{extension}</MenuItem>)}
            </TextField>

            <Typography>Item properties</Typography>

            <TextField
              id="wordpress-com-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-com-tags"
              label="Tags (comma separated)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="wordpress-com-categories"
              label="Categories (comma separated)"
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

export default WordpressComSection
