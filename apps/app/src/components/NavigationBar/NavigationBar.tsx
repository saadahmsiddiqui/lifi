import { NavigationMenu, Avatar } from "radix-ui";
import "./NavigationBar.css";
import logoDark from "../../assets/logo-hdark.svg";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item className="NavigationMenuLogo">
                    <Avatar.Root className="LogoRoot">
                        <Avatar.Image
                            src={logoDark}
                            alt="logo"
                            height={30}
                            width={50}
                        />
                        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                            JD
                        </Avatar.Fallback>
                    </Avatar.Root>

                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        asChild
                        className="NavigationMenuLink"
                    >
                        <Link to="/">Home</Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>


                <NavigationMenu.Item>
                    <NavigationMenu.Link asChild
                        className="NavigationMenuLink"
                    >
                        <Link to="/leaderboard">Leaderboard</Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
};

export default NavigationBar;
