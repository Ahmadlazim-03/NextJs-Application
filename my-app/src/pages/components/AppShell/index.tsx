type AppShellProps = {
    children: React.ReactNode;
}
const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
        {children}
        <button>Register Terlebih Dahulu !</button>
    </main>
    )
}

export default AppShell;