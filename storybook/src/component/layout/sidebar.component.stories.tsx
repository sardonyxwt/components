import React from 'react';
import { Sidebar, SidebarFooter, Button, Text, TextFontSize } from '@source';

export default {
    title: '@layout/Sidebar',
    component: Sidebar,
};

function SidebarStory() {
    const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

    const toggleSidebar = () => setIsOpenSidebar((isOpen) => !isOpen);

    return (
        <>
            <Button onClick={toggleSidebar}>
                <Text fontSize={TextFontSize.L}>Open Sidebar</Text>
            </Button>
            <Sidebar isOpen={isOpenSidebar} onOverlayClick={toggleSidebar}>
                <Button onClick={toggleSidebar}>
                    <Text fontSize={TextFontSize.L}>Close Sidebar</Text>
                </Button>
                <SidebarFooter>
                    <Text fontSize={TextFontSize.L}>Footer</Text>
                </SidebarFooter>
            </Sidebar>
        </>
    );
}

export const sidebar = (): React.ReactNode => <SidebarStory />;
