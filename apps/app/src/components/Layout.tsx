import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import { Flex } from '@radix-ui/themes';

function Layout() {
  return (
    <Flex direction="column" minHeight='99vh'>

      <header>
        <NavigationBar />
      </header>

      <Flex justify='center' align='center' flexGrow='2'>
        <Outlet></Outlet>
      </Flex>
    </Flex>
  );
}

export default Layout;