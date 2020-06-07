import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const confluenceItemTypes = ['page', 'blogpost']
const confluenceItemFormats = ['storage', 'view']

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#1A53C5',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const ConfluenceSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="confluence-content"
          id="confluence-header"
        >
          <Typography>Confluence</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="confluence-user-name"
              label="User Name (Email)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="confluence-access-token"
              label="API Token (or Password)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="confluence-base-url"
              label="Base URL"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="confluence-space"
              label="Space"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="confluence-flat-import"
                  name="confluenceFlatImport"
                  color="primary"
                />
              }
              label="Flat directory on importing"
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="confluence-markdown-import"
                  name="confluenceMarkdownImport"
                  color="primary"
                />
              }
              label="Convert to Markdown (import only)"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="confluence-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="confluence-parent-id"
              label="Parent ID"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="confluence-type"
              label="Type"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {confluenceItemTypes.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </TextField>

            <TextField
              id="confluence-format"
              label="Format"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {confluenceItemFormats.map(format => <MenuItem key={format} value={format}>{format}</MenuItem>)}
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

export default ConfluenceSection
