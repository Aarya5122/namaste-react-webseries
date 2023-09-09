import Button from "./Button";

function Header(){
    return(
        <header>
            <div className="logo-container"></div>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>
                <div>
                    cart
                </div>
                <Button value="GET STARTED"/>
            </div>
        </header>
    )
}

export default Header;