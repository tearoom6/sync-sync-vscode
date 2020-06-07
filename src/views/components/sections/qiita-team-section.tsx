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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#5489C0',
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const QiitaTeamSection = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary
          aria-controls="qiita-team-content"
          id="qiita-team-header"
        >
          <Typography>Qiita:Team</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <TextField
              id="qiita-team-access-token"
              label="Access Token"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="qiita-team-team-id"
              label="Team ID"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="qiita-team-user-name"
              label="User Name"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <Typography>Item properties</Typography>

            <TextField
              id="qiita-team-title"
              label="Title"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="qiita-team-tags"
              label="Tags (comma separated)"
              fullWidth
              margin="dense"
              variant="outlined"
            />

            <TextField
              id="qiita-team-group-id"
              label="Group ID"
              select
              fullWidth
              margin="dense"
              variant="outlined"
            >
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  id="qiita-team-coediting"
                  name="qiitaTeamCoediting"
                  color="primary"
                />
              }
              label="Co-editing (If you once make it co-editing, it cannot be reverted)"
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

export default QiitaTeamSection
