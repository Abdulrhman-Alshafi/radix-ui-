import { Dialog, DropdownMenu } from "radix-ui";
const MyDropdownMenu = ({ menu }) => {
  return (
    <DropdownMenu.Root>
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
  );
};

export default MyDropdownMenu;
