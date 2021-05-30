import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  playIcon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
    },
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            Explore our first
            {' '}
            <Typography component="span" variant="inherit" color="primary">
              genesis NFT
            </Typography>
          </span>
        }
        subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
        ctaGroup={[
          <Button color="primary" variant="contained" size="large">
            Buy genesis NFT
          </Button>
        ]}
        data-aos="fade-up"
      />
      <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Image
                  src="https://lh3.googleusercontent.com/SQKRv6-GD_DUzYl5p9Mv4p99o95IhamRVs04p0goE720pvUr-AVEo3HV9CnJdf9QE1nqAeLuMmZI6I_yd5hQiWiXZNPLbi-VvOrv=w600"
                  alt="Play Video"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
