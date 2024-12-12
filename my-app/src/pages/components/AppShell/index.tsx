import NavbarPage from "../navbar";
type AppShellProps = {
    children: React.ReactNode;
}
const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
        <NavbarPage />
        {children}
    </main>
    )
}

export default AppShell;