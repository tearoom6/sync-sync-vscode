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
    backgroundColor: '#74C23A',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const QiitaSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="qiita-content"
          id="qiita-header"
        >
          <Typography>Qiita</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="qiita-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="qiita-user-name"
              label="User Name"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="qiita-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="qiita-tags"
              label="Tags (comma separated)"
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

export default QiitaSection
