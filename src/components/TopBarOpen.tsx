import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import Link from 'next/link';

export function TopBarOpen () {
    return (
        <div>
            <Menu>

            <MenuButton >
                <div className={`
                flex flex-col 
                items-center justify-center 
                text-lg gap-1
                `}>
                    <div className="w-8 h-1 bg-white rounded-full" />
                    <div className="w-8 h-1 bg-white rounded-full" />
                    <div className="w-8 h-1 bg-white rounded-full" />
                </div>
            </MenuButton>

            <MenuList>
            <div className='bg-white border-2 p-3 rounded-2xl'>
                <div className="">

                    <Link href="/">
                        <MenuItem>
                            <div></div>
                        </MenuItem>
                    </Link>

                    <Link href="/">
                        <MenuItem>
                            <div></div>
                        </MenuItem>
                    </Link>

                    <Link href="/">
                        <MenuItem>
                            <div></div>
                        </MenuItem>
                    </Link>

                    <Link href="/">
                        <MenuItem>
                            <div></div>
                        </MenuItem>
                    </Link>
                </div>
            </div>
            </MenuList>
        </Menu>
        </div>
    )
}