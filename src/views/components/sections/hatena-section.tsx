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
    backgroundColor: '#2C71BF',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const HatenaSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="hatena-content"
          id="hatena-header"
        >
          <Typography>Hatena Blog</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="hatena-user-id"
              label="User ID"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="hatena-blog-id"
              label="Blog ID"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="hatena-api-key"
              label="API Key"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="hatena-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="hatena-categories"
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

export default HatenaSection
