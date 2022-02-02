import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Card, CardContent, CardMedia, Stack} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';


export function BrokerCarousel({numberOfCards = 2, brokers }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    let batches = [];

    if(brokers !== undefined) {
        batches = brokers.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / numberOfCards)

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)
            return resultArray
        }, [])
    }

    const maxSteps = batches.length;

    const handleNext = () => {setActiveStep((prevActiveStep) => prevActiveStep + 1);};

    const handleBack = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1);};

    const handleStepChange = (step) => {setActiveStep(step);};

    const getCards = (step) => {return batches[step];}

    const renderCards = (cardsSelection) => {
        if(cardsSelection === undefined) {
            return null;
        }

        return cardsSelection.map((card) => {
            return (
                <Card elevation={0} key={card.label} sx={{width: {xs: 350}}}>
                    <CardMedia
                        component="img"
                        sx={{maxHeight: "150px"}}
                        image={card.image}
                        alt={card.label}
                    />
                </Card>
            )
        })
    }

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{width: "100%"}}
        >
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {batches.map((_, index) => {
                    return renderCards(getCards(index))
                })}
            </SwipeableViews>
            <MobileStepper
                sx={{ maxWidth: 400}}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        style={{marginLeft: "42px"}}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        style={{marginRight: "42px"}}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Stack>
    );
}
