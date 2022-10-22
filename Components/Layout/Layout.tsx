import { Box } from '@chakra-ui/react'
import React from 'react'


interface Props {}

const Layout = ({ children }) => {
    return (
        <Box>
            <Box>
                
            </Box>
            <Box>
                {children}
            </Box>
            <Box>
                Footer
            </Box>
        </Box>
    )
}

export default Layout
