import React from "react";
import {
    Button,
    Icon,
    Input,
    Image,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
   } from '@chakra-ui/react'

  import { HamburgerIcon,ChevronDownIcon} from '@chakra-ui/icons';

  function DrawerUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button  ref={btnRef} colorScheme='#0778f1' onClick={onOpen}>
        <Icon as={HamburgerIcon}  w={9} h={9}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
 

  const List=()=>{
    return (
        <Popover isLazy >
        <PopoverTrigger >
          <Button bg='white'><Image bg='white' src='https://www.jiomart.com/assets/version1665662693/smartweb/images/icons/list-view.svg'></Image></Button>
        </PopoverTrigger>
        <PopoverContent w='250px' h='300px' fontSize='small' padding='5px'>
          <PopoverHeader fontWeight=''>Shop faster - type or paste your shopping list below</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
          <Input size='sm' variant='flushed' placeholder='eg. Milk,Bread,Fruit' />
          <Input size='sm' variant='flushed' />
          <Input size='sm' variant='flushed' />
          <Input size='sm' variant='flushed' />
          <Input size='sm' variant='flushed' />
          {/* <Input size='sm' variant='flushed' /> */}
          
         <Button style={{margin:'20px 8px 0 0',width:'40%'}}>Clear</Button>
         <Button colorScheme='blue' marginTop='20px'>Search Now</Button>
        
        </PopoverBody>
        </PopoverContent>
      </Popover>

    )
  }
  const DropDownIcon=()=>{
    return   <Icon as={ChevronDownIcon} w={4} h={4} />
  }

  export {DrawerUser,List,DropDownIcon};