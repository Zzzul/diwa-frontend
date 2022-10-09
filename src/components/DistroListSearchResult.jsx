import React from "react";

import {
    ListItem,
    UnorderedList,
    Link
} from "@chakra-ui/react"


function DistroListSearchResult({ searchResults }) {

    const searchResultList = searchResults.map((result, index) => {
        return (
            <ListItem padding="2px" key={index}>
                <Link href="/distro/archlinux">
                    {result.name}
                </Link>
            </ListItem>
        )
    })

  return (
    <UnorderedList className="search-result-wrapper">
        {
            searchResultList
        }
    </UnorderedList>
  )
}

export default DistroListSearchResult
