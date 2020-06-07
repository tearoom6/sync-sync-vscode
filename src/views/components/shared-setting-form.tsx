import * as React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

const SharedSettingForm = () => {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="project-path"
          label="Project Path"
          fullWidth
          margin="dense"
          variant="outlined"
        />

        <TextField
          id="config-dir-path"
          label="Config Dir Path"
          fullWidth
          margin="dense"
          variant="outlined"
        />

        <TextField
          id="local-path"
          label="Local Path"
          fullWidth
          margin="dense"
          variant="outlined"
        />

        <FormControlLabel
          control={
            <Checkbox
              id="option-keep-file-path"
              name="optionKeepFilePath"
              color="primary"
            />
          }
          label="Keep file path on importing"
        />
      </form>
    </>
  )
}

export default SharedSettingForm
