import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import "./App.css";
import { Dialog, DropdownMenu } from "radix-ui";

function App() {
  const Menus = [
    {
      id: 1,
      title: "Menu 1",
      titleColor: "text-yellow-400",
      itemsColor: "text-gray-200",
      items: [
        {
          id: 1,
          content: "the content",
        },
        {
          id: 2,
          content: "the content",
        },
        {
          id: 3,
          content: "the content",
        },
        {
          id: 4,
          content: "the content",
        },
        {
          id: 5,
          content: "the content",
        },
      ],
    },
    {
      id: 2,
      title: "Menu 2",
      titleColor: "text-yellow-500",
      itemsColor: "text-gray-400",
      items: [
        {
          id: 1,
          content: "the content",
        },
        {
          id: 2,
          content: "the content",
        },
        {
          id: 3,
          content: "the content",
        },
        {
          id: 4,
          content: "the content",
        },
        {
          id: 5,
          content: "the content",
        },
      ],
    },
    {
      id: 3,
      title: "Menu 3",
      titleColor: "text-yellow-600",
      itemsColor: "text-gray-50",
      items: [
        {
          id: 1,
          content: "the content",
        },
        {
          id: 2,
          content: "the content",
        },
        {
          id: 3,
          content: "the content",
        },
        {
          id: 4,
          content: "the content",
        },
        {
          id: 5,
          content: "the content",
        },
      ],
    },
  ];
  return (
    <>
      <Flex className=" w-full flex-col h-screen items-center justify-center gap-8 bg-slate-100">
        <Text className="text-3xl font-bold text-gray-800">
          Hello from Radix Themes
        </Text>
        <Button className="text-xl font-bold h-12 w-64 bg-gray-800 text-gray-400 cursor-pointer">
          Let's go
        </Button>
      </Flex>
      <Box className="w-full h-screen bg-slate-800 flex items-center ">
        <Box className="max-w-[1300px] m-auto  flex gap-11 justify-between flex-col xl:flex-row p-4">
          <Box className="flex flex-col gap-1">
            <Text className="text-3xl font-bold text-gray-200">
              Hello from Radix Themes
            </Text>
            <Heading className="text-gray-500">
              The quick brown fox jumps over the lazy dog
            </Heading>
          </Box>
          <Box className="flex flex-col gap-4">
            <Text className="text-3xl font-bold text-gray-200">
              Hello from Radix Themes
            </Text>
            <Button className="text-xl font-bold h-12 w-64 bg-gray-400 text-gray-900 cursor-pointer">
              Let's go
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="w-full h-screen bg-red-950 flex items-center relative">
        <Dialog.Root>
          <Dialog.Trigger className="bg-red-50 text-red-700 font-bold text-[46px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-md hover:bg-red-200 transition-all">
            Edit Profile
          </Dialog.Trigger>
          <Dialog.Overlay className="bg-black" />
          <Dialog.Content className="bg-white shadow-lg fixed top-4 left-4 p-6 rounded-md">
            <Dialog.Title className="font-bold">Edit Profile</Dialog.Title>
            <Dialog.Description>make Changes here</Dialog.Description>
          </Dialog.Content>
        </Dialog.Root>
      </Box>
      <Box className="w-full h-screen bg-green-950 flex items-center relative">
        {Menus.map((menu) => (
          <DropdownMenu.Root key={menu.id}>
            <DropdownMenu.Trigger className={menu.titleColor}>
              {menu.title}
            </DropdownMenu.Trigger>

            <DropdownMenu.Content sideOffset={5}>
              {menu.items.map((item) => (
                <DropdownMenu.Item key={item.id} className={menu.itemsColor}>
                  {item.content}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ))}
      </Box>
    </>
  );
}

export default App;
