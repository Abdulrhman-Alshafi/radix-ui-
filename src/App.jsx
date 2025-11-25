import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import "./App.css";
import { Dialog, Popover, Tabs } from "radix-ui";
import Menus from "./menu";
import MyDropdownMenu from "./MyDropdownMenu";

function App() {
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
          <MyDropdownMenu key={menu} menu={menu} />
        ))}
      </Box>
      <Box className="w-full h-screen bg-emerald-950 flex items-center relative">
        <Popover.Root>
          <Popover.Trigger className="text-gray-50">Info</Popover.Trigger>
          <Popover.Content side="bottom" className="text-gray-300">
            {" "}
            Hello there!
          </Popover.Content>
        </Popover.Root>
      </Box>
      <Box className="w-full h-screen bg-rose-950 text-gray-100 flex items-center justify-center p-6">
        <Tabs.Root
          defaultValue="account"
          className="w-full max-w-2xl bg-red-200 p-6 rounded-lg shadow-lg"
        >
          {/* Tab Headers */}
          <Tabs.List className="flex justify-center gap-8 text-rose-800 mb-6">
            <Tabs.Trigger
              value="account"
              className="px-4 py-2 rounded-md font-semibold hover:bg-rose-300 data-[state=active]:bg-rose-400"
            >
              Account
            </Tabs.Trigger>

            <Tabs.Trigger
              value="password"
              className="px-4 py-2 rounded-md font-semibold hover:bg-rose-300 data-[state=active]:bg-rose-400"
            >
              Password
            </Tabs.Trigger>

            <Tabs.Trigger
              value="2ndPassword"
              className="px-4 py-2 rounded-md font-semibold hover:bg-rose-300 data-[state=active]:bg-rose-400"
            >
              2nd Password
            </Tabs.Trigger>

            <Tabs.Trigger
              value="3rdPassword"
              className="px-4 py-2 rounded-md font-semibold hover:bg-rose-300 data-[state=active]:bg-rose-400"
            >
              3rd Password
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tab Content */}
          <Tabs.Content
            value="account"
            className="h-[200px] bg-red-800 text-gray-100 font-bold text-2xl flex justify-center items-center uppercase rounded-md p-6 data-[state=inactive]:hidden"
          >
            This is the account
          </Tabs.Content>

          <Tabs.Content
            value="password"
            className="h-[200px] bg-red-800 text-gray-100 font-bold text-2xl flex justify-center items-center uppercase rounded-md p-6 data-[state=inactive]:hidden"
          >
            This is the account password
          </Tabs.Content>

          <Tabs.Content
            value="2ndPassword"
            className="h-[200px] bg-red-800 text-gray-100 font-bold text-2xl flex justify-center items-center uppercase rounded-md p-6 data-[state=inactive]:hidden"
          >
            This is the account 2nd password
          </Tabs.Content>

          <Tabs.Content
            value="3rdPassword"
            className="h-[200px] bg-red-800 text-gray-100 font-bold text-2xl flex justify-center items-center uppercase rounded-md p-6 data-[state=inactive]:hidden"
          >
            This is the account 3rd password
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </>
  );
}

export default App;
