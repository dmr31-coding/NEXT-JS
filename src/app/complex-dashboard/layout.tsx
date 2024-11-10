export default function DashboardLayout({children, users, revenue, notifications, login}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;


}) {

    const isLoggedin = false
    return isLoggedin ? (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex"}}>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{ display: "flex", flex: 1}}>
                {notifications}
            </div>
            </div>
        </div>
    ) : (
        login
    );
    
}