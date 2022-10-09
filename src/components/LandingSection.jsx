import React from "react";
import reactLogo from '../assets/react.svg'
import { 
    Box, 
    Text, 
    Image, 
    Input, 
    UnorderedList,
    ListItem,
    Button,
    Link,
    Progress
} from "@chakra-ui/react"
import DistroListSearchResult from "./DistroListSearchResult";


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
            searchDistroValue: '',
            isLoaded: false,
            distroSearchResults: [],
            listOfDistributions: [],
        }

        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        fetch("https://diwa.herokuapp.com/api/v2/distributions")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    listOfDistributions: result.distibutions
                });
                console.log(result.distibutions)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    searchHandler = (event) => {

        let yangdiketik = event.target.value;

        console.log(yangdiketik)
        this.setState({ searchDistroValue: yangdiketik })

        var divnyapenampunghasilsearch = document.querySelector('.search-result-wrapper');

        divnyapenampunghasilsearch.classList.add('search-result-wrapper-show');
        // wait until done typing in one second
        delay(() => {
            let listOfDistributions = this.state.listOfDistributions
            console.log(listOfDistributions)
            let searchResults = []
            for (let i = 0; i < listOfDistributions.length; i++) {
                if (listOfDistributions[i].name.toLowerCase().includes(yangdiketik.toLowerCase())) {
                    searchResults.push(listOfDistributions[i])
                }
            }

            this.setState({ distroSearchResults: searchResults })

            if (searchResults.length > 0) {
                divnyapenampunghasilsearch.classList.add('search-result-wrapper-show');
            } else {
                divnyapenampunghasilsearch.classList.remove('search-result-wrapper-show');
            }
        }, 1000 );
    }

    render() {
        const {error, isLoaded, listOfDistributions} = this.state;
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
                    <Box w="100%" position="relative">
                        <Input
                            placeholder="Enter a distro name"
                            size="lg"
                            w="50%"
                            mt={4}
                            className="landing-section-input"
                            onChange={this.searchHandler}
                            bg="white"
                            zIndex="2"
                            position="relative"
                        />
                        <DistroListSearchResult searchResults={this.state.distroSearchResults} />
                    </Box>
                    <Box className="landing-section-progress">
                        <Progress size="xs" isIndeterminate />
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default LandingSection;
