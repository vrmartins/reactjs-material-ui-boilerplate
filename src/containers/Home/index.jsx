import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  StyledContainer,
  StyledTitle,
  StyledSubtitle
} from './style'
import logo from 'assets/images/juggernaut.gif'

const Home = ({ t }) => (
  <StyledContainer>
    <img
      src={logo}
      alt="Gif by Reuno"
      title="Gif by Reuno"
    />
    <StyledTitle color="primary" component="h1" variant="h4" gutterBottom>
      { t('general.welcome') }
    </StyledTitle>
    <StyledSubtitle color="primary" component="h3" variant="h5">
      { t('general.description') }
    </StyledSubtitle>
  </StyledContainer>
)

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home)
