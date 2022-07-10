import { Flex, Heading, Image, useBreakpointValue } from '@chakra-ui/react';

import logoSmall from '../../../assets/logo-sm.png';
import logo from '../../../assets/logo.png';
import SideBar from '../Sidebar/SideBar';
import { HeaderProps } from './interfaces';
import { AvatarUserProfile } from './parts/AvatarUserProfile';
import OpenSideBarButton from './parts/OpenSideBarButton';
import SignOutButton from './parts/SignOutButton';

export function Header({ avatar, message, name }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Heading
      display="flex"
      bg="black.inputs"
      h={{ base: '100px', lg: '144px' }}
      alignItems="center"
      px={{ lg: '40', base: '4' }}
      w="100%"
      position={isWideVersion ? 'unset' : 'sticky'}
      top="0"
      zIndex="9">
      {isWideVersion ? <Image src={logo} /> : <Image src={logoSmall} mb="1" />}
      {isWideVersion ? (
        <>
          <AvatarUserProfile
            cursor="pointer"
            ml="16"
            avatar={avatar}
            name={name}
            message={message}
            type="header"
          />
          <SignOutButton ml="auto" />
        </>
      ) : (
        <Flex w="100%" justify="space-between" align="center">
          <OpenSideBarButton ml="auto" />
          <SideBar name={name} avatar={avatar} type="header" message="Be Welcome" />
        </Flex>
      )}
    </Heading>
  );
}
