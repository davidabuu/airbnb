import Header from "../components/Header"
import Search from "../components/Search"
import UserWebLayout from "../components/UserWebLayout"

export default function Home() {
    return (
        <UserWebLayout webtitle="Home Page">
            <div style={{ background: "#000", minHeight: "100vh" }}>
                <Header />
                <Search />
            </div>
        </UserWebLayout>
    )
}
