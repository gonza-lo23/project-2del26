import { Icon,Skeleton, SkeletonCircle, SkeletonText,Text, Stack, StackDivider } from '@chakra-ui/react';
import * as React from 'react'
import { FaStar } from 'react-icons/fa';

const TWEETS = new Array(12).fill(true).map((_, index) => index);

function FeedScreen() {
  return (
    // maxHeight='100vh' direction='row'  spacing=0
    <Stack paddingY={12} maxHeight='100vh' divider={<StackDivider/>} spacing={0} >
    <Stack spacing={0} divider={<StackDivider/>} width='100%' >
      <Stack direction='row' 
      alignItems='center' 
      justifyContent='space-between' 
      paddingY={4}
      paddingX={4}
      >
        <Text fontWeight='bold'>Incio</Text>
        <Icon as={FaStar}/>
      </Stack>
    <Stack 
     divider={<StackDivider/>}
     flex={1}
     maxHeight='100vh'
     maxWidth={600}
     overflowY='auto'
     spacing={0}
     width='100%'
     sx={{
      "&::-webkit-scrollbar":{
        display:'none',
      },
     }} >
      {
        TWEETS.map((index)=>{ 
          return (<Stack key={index} direction='row' spacing={4} width='100%' padding={4} maxWidth={480} > 
              <SkeletonCircle height={12} width={12}/>
              <Stack width='100%' spacing={4}>
            <Stack alignItems='flex-end' direction='row' spacing={2}>
             
                <Skeleton height={6} width='120px'/>
                <Skeleton height={3} width='80px'/>
              </Stack>
            </Stack>
            <SkeletonText height='100%' noOfLines={6} spacing={2}/>
          </Stack>
        )}
        )}
    </Stack>
    </Stack>
    <Text maxWidth={350} width='100%'>
      {""}
    </Text>
    </Stack>
  );
};

export default FeedScreen;