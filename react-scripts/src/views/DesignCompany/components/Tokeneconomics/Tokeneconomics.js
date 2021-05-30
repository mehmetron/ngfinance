import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  featureCardFirstItem: {
    background: theme.palette.secondary.main,
    '& h3, & h6': {
      color: 'white',
    },
  },
  featureIcon: {
    fontSize: 120,
    marginBottom: theme.spacing(2),
  },
  featureCard: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      minHeight: 550,
    },
  },
  featureCardSecondItem: {
    border: `2px solid ${theme.palette.text.primary}`,
    marginTop: 0,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(30),
    },
  },
}));

const Tokeneconomics = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        data-aos="fade-up"
        title="Token Distribution"
      />
    </div>
  );
};

Tokeneconomics.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Tokeneconomics;
