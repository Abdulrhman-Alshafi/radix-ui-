import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Theme,
} from "@radix-ui/themes";
import "./App.css";
import { AlertDialog, Dialog, DropdownMenu, Popover, Tabs } from "radix-ui";
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
      <Box className="w-full h-screen bg-[#D4AF37] bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center  text-gray-100 flex items-center justify-center p-6">
        <Box className="flex gap-8 bg-yellow-200 px-8 py-4 rounded-[50px]">
          {Menus.map((menu) => (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className=" text-yellow-900">
                {menu.title}
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                sideOffset={2}
                className="dropdown-content backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 shadow-lg flex flex-col gap-4"
              >
                {menu.items.map((item) => (
                  <DropdownMenu.Item key={item.id} className="text-xl">
                    {item.content}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          ))}
        </Box>
      </Box>
      <Box className="w-full h-screen bg-[#F2E8DC] text-gray-100 flex items-center justify-center p-6">
        <AlertDialog.Root>
          <AlertDialog.Trigger className="text-red-950 text-2xl font-semibold">
            Open dialog
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-red-950/50" />

            <AlertDialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
              <AlertDialog.Title className="text-lg font-semibold">
                This is the title
              </AlertDialog.Title>

              <AlertDialog.Description className="mt-3 text-sm text-gray-600">
                This is the description. Add whatever information the user needs
                to know before confirming this action.
              </AlertDialog.Description>

              <div className="mt-6 flex justify-end gap-3">
                <AlertDialog.Cancel className="rounded-md border px-3 py-1.5 text-sm">
                  Cancel
                </AlertDialog.Cancel>

                <AlertDialog.Action className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white">
                  Confirm
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </Box>
      <Theme
        accentColor="mint"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius="full"
      >
        <Button>Click me</Button>
      </Theme>
    </>
  );
}

export default App;
