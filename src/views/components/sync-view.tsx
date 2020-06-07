import * as React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import SharedSettingForm from './shared-setting-form'
import BacklogSection from './sections/backlog-section'
import BloggerSection from './sections/blogger-section'
import ConfluenceSection from './sections/confluence-section'
import DocbaseSection from './sections/docbase-section'
import EsaSection from './sections/esa-section'
import HatenaSection from './sections/hatena-section'
import MediumSection from './sections/medium-section'
import QiitaSection from './sections/qiita-section'
import QiitaTeamSection from './sections/qiita-team-section'
import WordpressComSection from './sections/wordpress-com-section'
import WordpressOrgSection from './sections/wordpress-org-section'

const SyncView = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Sync! Sync!</h1>
        <SharedSettingForm />

        <BacklogSection />
        <BloggerSection />
        <ConfluenceSection />
        <DocbaseSection />
        <EsaSection />
        <HatenaSection />
        <MediumSection />
        <QiitaSection />
        <QiitaTeamSection />
        <WordpressComSection />
        <WordpressOrgSection />
      </div>
    </ThemeProvider>
  )
}

export default SyncView
