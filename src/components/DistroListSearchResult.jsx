import React from "react";

import {
    ListItem,
    UnorderedList,
    Link,
    Progress
} from "@chakra-ui/react"


function DistroListSearchResult({ searchState, searchResults }) {

    const searchResultList = searchResults.map((result, index) => {
        return (
            <ListItem padding="2px" key={index}>
                <Link href="/distro/archlinux">
                    {result.name}
                </Link>
            </ListItem>
        )
    })
    console.log(searchState)

    return(
        <UnorderedList className="search-result-wrapper">
            {
                searchState === 'success' ? searchResultList : 
                searchState === 'loading' ? <Progress size='xs' isIndeterminate /> :
                searchState === 'error' ? <ListItem>Something went wrong</ListItem> : <ListItem>Not Found</ListItem>

            }
        </UnorderedList>
    )
}

export default DistroListSearchResult
