import React from "react";
import reactLogo from '../assets/react.svg'
import { Box, Text, Image, Input } from "@chakra-ui/react"


var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
   };
})();

class LandingSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchDistroValue: false,
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchAPIHandler(value) {
        console.log(`API Called${value}`);
    }

    searchHandler = (event) => {

        let yangdiketik = event.target.value;

        console.log(yangdiketik)
        this.setState({ searchDistroValue: yangdiketik })

        // wait until done typing in one second
        delay(() => {
            this.searchAPIHandler(yangdiketik)
        }, 1000 );
    }

    render() {
        return (
            <Box
                w="100%"
                h="670px"
                bgGradient="radial-gradient(circle, rgba(222,85,255,1) 0%, rgba(79,121,245,1) 100%);"
                className="landing-section"
            >
                <Box className="landing-section-inner">
                    <Image
                        src={reactLogo}
                        className="react-logo logo-spin"
                        boxSize={180}
                    />
                    <Text fontSize="1.5rem" fontWeight="bold" color="white">
                        What distro do you want to know about?
                    </Text>
                    <Input
                        placeholder="Enter a distro name"
                        size="lg"
                        w="50%"
                        mt={4}
                        className="landing-section-input"
                        onChange={this.searchHandler}
                        bg="white"
                    />

                </Box>

            </Box>
        );
    }
}

export default LandingSection;
