import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { Section, HeroSimpleBackground } from 'components/organisms';
import { makeStyles } from "@material-ui/core/styles";
import { FiTwitter } from 'react-icons/fi';

const useStyles = makeStyles(theme => ({
    fontWeight900: {
        fontWeight: 900,
    },
    leftSideContent: {
        '& .section-header__cta-container': {
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
                '& .section-header__cta-item-wrapper': {
                    width: '100%',
                    '&:last-child': {
                        marginLeft: 0,
                        marginTop: theme.spacing(1),
                    },
                    '& .MuiButtonBase-root': {
                        width: '100%',
                    },
                },
            },
        }
    },
    heroShaped: {
        '& .hero-shaped__image': {
            backgroundColor: theme.palette.alternate.main,
        },
        [theme.breakpoints.down('sm')]: {
            '& .hero-shaped__image': {
                position: 'relative',
            },
            '& .hero-shaped__wrapper': {
                flexDirection: 'column',
            },
        },
    },
    imageAnimation: {
        background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-light.png")`,
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'scroll',
        backgroundSize: '400px auto',
        animation: `$slideshow 50s linear infinite`,
        width: '600%',
        height: '600%',
        backgroundColor: theme.palette.alternate.dark,
        top: '-25%',
        left: '-100%',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            backgroundSize: '800px auto',
        }
    },
    imageAnimationDark: {
        background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-dark.png")`,
    },
    '@keyframes slideshow': {
        '0%': {
            transform: 'rotate(-13deg) translateY(-25%)',
        },
        '100%': {
            transform: 'rotate(-13deg) translateY(-80%)',
        },
    },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

    const title = (
        <Typography variant="h2" component="span" className={classes.fontWeight900}>
            We make
            <br/>
            <TypedText
                component="span"
                variant="h2"
                color="secondary"
                className={classes.fontWeight900}
                typedProps={{
                    strings: [
                        'Art',
                        'NFT',
                        'Future',
                        'and many more...',
                    ],
                    typeSpeed: 50,
                    loop: true,
                }}
            />
        </Typography>
    );

  return (
    <div className={className} {...rest}>
      <HeroSimpleBackground backgroundImage="https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg">
        <Section narrow>
          <SectionHeader
            title={title}
            titleVariant="h3"
            subtitle="Simply hold NG Token in your wallet and you will get more. On each transaction the protocol automatically distributes rewards to holders as well as auto-locks liquidity forever."
            ctaGroup={[
                <Button color="primary" variant="contained" size="large">
                    Buy first genesis NFT
                </Button>,
                <Button color="secondary" variant="outlined" size="large">
                    Join the community
                </Button>,
            ]}
            disableGutter
          />
        </Section>
      </HeroSimpleBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
