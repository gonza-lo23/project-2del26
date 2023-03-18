import * as React from 'react'
import {Image, Container, Box, Stack,Icon, Text, Button, useColorMode, useColorModeValue, StackDivider } from '@chakra-ui/react'
import {FaTwitter,FaHome,FaHashtag,FaBell,FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH} from 'react-icons/fa';
import{BsHouseFill} from 'react-icons/bs';
import { Link, useLocation} from 'react-router-dom';


const LINKS = [
  {
    href:"/home",
    text:"Inicio",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/explorer",
    text:"Explorar",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/notifications",
    text:"Notificaciones",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/messages",
    text:"Mensajes",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/Gua",
    text:"Guardados",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/list",
    text:"Listas",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/profile",
    text:"Perfil",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
  {
    href:"/options",
    text:"masOpciones",
    inactiveIcon:BsHouseFill,
    activeIcon:BsHouseFill,
  },
];



function layout({children}) {
  const {toggleColorMode} = useColorMode();
  const {pathname} = useLocation();
  const logoColor = useColorModeValue('primary.500', undefined);
  const userColor = useColorModeValue(undefined, 'white')
  return (
    <Container className='nuevo' paddingY={5} height='100%' alignSelf='center' maxWidth='container.md'>
    <Stack direction='row'  height='100%' divider={<StackDivider/>}>
         <Stack justifyContent='space-between'>
         <Stack minWidth={72}  paddingX={6} paddingY={3} spacing={8}>
            {/* link to */}
          <Icon as={FaTwitter} height={8} width={8  } onClick={toggleColorMode} color={logoColor}/>
          {/* termina link */}
          
          <Stack fontSize='xl' fontWeight='bold' spacing={7}>
            {LINKS.map((link)=>{
              <Link key={link.href} to={link.href}>
                <Stack 
                alignItems='center' 
                direction='row' 
                spacing={5} 
                color={pathname === link.href ? link.activeIcon  : link.inactiveIcon}
                >
                  <Icon 
                  as={pathname === link.href ? 'primary.500' : 'inherit'} 
                  height={6} 
                  width={6}
                  />
                  <Text>{link.text}</Text>
                </Stack>
              </Link>
            })}
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold'direction='row' spacing={6}>
            <Icon  height={6} width={6} as={FaHome} />
            <Text>Inicio</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold'  direction='row' spacing={6}>
            <Icon height={6} width={6} as={FaHashtag}/>
            <Text>Explorar</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold' height={6} width={6} direction='row' spacing={6}>
            <Icon height={6} width={6}  as={FaBell}/>
            <Text>Notifications</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold' height={6} width={6} direction='row' spacing={6}>
            <Icon height={6} width={6}  as={FaEnvelope}/>
            <Text>Mensajes</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold' height={6} width={6} direction='row' spacing={6}>
            <Icon height={6} width={6}  as={FaBookmark}/>
            <Text>Guardados</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold' height={6} width={6} direction='row' spacing={6}>
            <Icon height={6} width={6} as={FaList}/>
            <Text>Listas</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold' height={6} width={6} direction='row' spacing={6}>
            <Icon height={6} width={6} as={FaUser}/>
            <Text>Perfil</Text>
          </Stack>
          <Stack alignItems='center' fontSize='lg' fontWeight='bold' height={6} width={6} direction='row' spacing={6}>
            <Icon height={6} width={6} as={FaEllipsisH}/>
            <Text fontSize='lg' fontWeight='bold'>
              MasOpciones</Text>
          </Stack>         
         <Button colorScheme='primary' size='lg'>
          Twittear
          </Button>
          </Stack>
          <Stack alignItems='center' direction='row' justifyContent='space-between' padding={4}>
          <Stack direction='row' alignItems='center'>
           <Image 
           height={10}
           width={10}
           borderRadius='50%'
           src='//placehold.it/64x64'/>
           <Stack spacing={0}>
          <Text color={userColor} fontSize='sm' fontWeight='bold'>gonza.tsx</Text>
          <Text>@gonza</Text>
          </Stack>
          </Stack>
          <Icon as={FaEllipsisH}/>
         </Stack>
         </Stack>
         <Box paddingX={4} width='100%'>{children}</Box>
         </Stack>
    </Container>
  );
};

export default layout;