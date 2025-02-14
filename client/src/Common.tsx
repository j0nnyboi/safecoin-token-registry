import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  Flex,
  Image,
  Link,
  Button,
  ButtonGroup,
  Text
} from '@chakra-ui/react'

import solanaLogo from './logos/solana-logo-color-white.svg'

declare global {
  interface Window { // eslint-disable-line no-unused-vars
    solana: any;
  }
}

interface HeaderProps {
  suppressGitHub?: boolean;
  suppressLaunchApp?: boolean;
  suppressPhantom?: boolean;
  isConnectedToPhantom?: boolean;
}
export function Header (props: HeaderProps) {
  return (
    <Flex
      w="100%"
      h="7vh"
      bg="gray.800"
      position={['static', 'fixed']}
      alignItems="center"
      justifyContent={['left', 'center']}
      flexWrap="wrap"
    >
      <Flex ml={['30px', '100px']}>
        <RouterLink to="/">
          <Flex>
            <Image src={solanaLogo} width={['80px', '150px']} />
            <Text
              ml="10px"
              fontFamily="Orbitron"
              fontWeight="bold"
              color="gray.100"
              fontSize={['0.7em', '1.0em']}
            >
              Token Registry
            </Text>
          </Flex>
        </RouterLink>
      </Flex>
      <ButtonGroup ml="auto" mr="50px" display={['none', 'block']}>
        <Link href="https://github.com/ChrisBender/safecoin-token-registry" isExternal>
          <Button variant="github" display={props.suppressGitHub ? 'none' : 'inline'}>
            GitHub
          </Button>
        </Link>
        <RouterLink to="/app">
          <Button variant="launch-app" display={props.suppressLaunchApp ? 'none' : 'inline'}>
            Launch App
          </Button>
        </RouterLink>
        <Button
          variant="launch-app"
          display={props.suppressPhantom ? 'none' : 'inline'}
          onClick={(e) => {
            props.isConnectedToPhantom ? window.solana.disconnect() : window.solana.connect()
          }}
        >
          {props.isConnectedToPhantom ? 'Disconnect Wallet' : 'Connect to Phantom'}
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
